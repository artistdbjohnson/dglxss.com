"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy } from "lucide-react";
import {
  DNS,
  HOSTS,
  MANAGED_PLANS,
  PATHS,
  SUPPORT_EMAIL,
  type PortalPath,
} from "@/lib/clients";

const STORAGE_KEY = "dglxss-clients-portal-v1";

type PortalState = {
  path: "self" | "managed" | null;
  stepIndex: number;
  completed: Record<string, boolean>;
  host: string | null;
  plan: string;
  contact: { email: string; domain: string; name: string };
  accessMode: "invite" | "dns" | null;
  finished: boolean;
};

const defaultState = (): PortalState => ({
  path: null,
  stepIndex: 0,
  completed: {},
  host: null,
  plan: "steward",
  contact: { email: "", domain: "", name: "" },
  accessMode: null,
  finished: false,
});

function loadState(): PortalState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultState(), ...JSON.parse(raw) };
  } catch {
    /* ignore */
  }
  return defaultState();
}

export function ClientsPortal() {
  const [state, setState] = useState<PortalState>(defaultState);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }, []);

  const pathMeta: PortalPath | null = state.path ? PATHS[state.path] : null;
  const steps = pathMeta?.steps ?? [];
  const step = steps[state.stepIndex] ?? steps[steps.length - 1];
  const completedCount = Object.keys(state.completed).length;
  const pct =
    steps.length > 0 ? Math.round((completedCount / steps.length) * 100) : 0;

  const markCompleteAndNext = () => {
    if (!step) return;
    if (step.hostPicker && !state.host) {
      showToast("Please pick your host first");
      return;
    }
    if (step.contactForm) {
      if (!state.contact.email.trim() || !state.contact.domain.trim()) {
        showToast("Please enter email and domain");
        return;
      }
    }
    if (step.accessOptions && !state.accessMode) {
      showToast("Please choose how to share access");
      return;
    }
    if (step.plans && !state.plan) {
      showToast("Please pick a plan");
      return;
    }

    setState((s) => {
      const completed = { ...s.completed, [step.id]: true };
      if (s.stepIndex < steps.length - 1) {
        return { ...s, completed, stepIndex: s.stepIndex + 1 };
      }
      return { ...s, completed, finished: true };
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetAll = () => {
    if (!confirm("Start over from the beginning?")) return;
    localStorage.removeItem(STORAGE_KEY);
    setState(defaultState());
  };

  const copyText = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`Copied ${label}`);
    } catch {
      showToast("Could not copy — long-press to select");
    }
  };

  if (!hydrated) {
    return (
      <div className="min-h-dvh bg-black text-white flex items-center justify-center">
        <p className="text-white/40 text-sm tracking-wide">Loading…</p>
      </div>
    );
  }

  if (!state.path) {
    return (
      <div className="min-h-dvh flex flex-col bg-black text-white">
        <header className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/[0.08]">
          <Link
            href="/"
            className="text-sm tracking-tight lowercase text-white/80 hover:text-white"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            dglxss
          </Link>
          <span className="liquid-glass rounded-full px-2.5 py-1 text-[11px] font-medium text-white/70">
            For clients
          </span>
        </header>
        <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 py-12 max-w-3xl mx-auto w-full">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-white/42 mb-3">
            Go live — by dglxss
          </p>
          <h1
            className="text-[2rem] sm:text-4xl md:text-5xl text-white tracking-tight lowercase"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            How do you want to go live?
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/55 leading-relaxed">
            Your new website is ready. Pick the path that feels easiest.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setState({ ...defaultState(), path: "self" })}
              className="liquid-glass-card rounded-2xl p-6 text-left hover:bg-white/[0.04] transition-colors"
            >
              <span className="liquid-glass rounded-full px-2.5 py-1 text-[11px] font-medium text-white/60">
                {PATHS.self.badge}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-white">{PATHS.self.title}</h2>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{PATHS.self.subtitle}</p>
              <span className="mt-5 inline-block text-sm font-medium text-white/80">Choose this path →</span>
            </button>
            <button
              type="button"
              onClick={() => setState({ ...defaultState(), path: "managed" })}
              className="rounded-2xl p-6 text-left bg-white text-black hover:bg-white/95 transition-colors"
            >
              <span className="rounded-full bg-black/10 px-2.5 py-1 text-[11px] font-medium text-black/70">
                {PATHS.managed.badge}
              </span>
              <h2 className="mt-4 text-lg font-semibold">{PATHS.managed.title}</h2>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">{PATHS.managed.subtitle}</p>
              <span className="mt-5 inline-block text-sm font-medium">Choose this path →</span>
            </button>
          </div>
          <p className="mt-8 text-center text-xs text-white/40">
            Not sure? Pick Have dglxss take care of everything.
          </p>
        </div>
      </div>
    );
  }

  if (state.finished) {
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center px-6 text-center bg-black text-white">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h1
          className="mt-7 text-3xl sm:text-4xl text-white tracking-tight lowercase"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          You are live
        </h1>
        <p className="mt-3 text-white/55 max-w-md leading-relaxed">
          Thanks for walking through every step.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="h-12 px-6 rounded-full bg-white text-black text-sm font-medium inline-flex items-center hover:bg-white/90"
          >
            Email dglxss
          </a>
          <button
            type="button"
            onClick={resetAll}
            className="h-12 px-5 rounded-full liquid-glass text-sm text-white/70 hover:text-white"
          >
            Start over
          </button>
        </div>
        <Link href="/" className="mt-10 text-sm text-white/40 hover:text-white/70">
          ← Back to dglxss
        </Link>
      </div>
    );
  }

  if (!pathMeta || !step) return null;

  return (
    <Wizard
      pathMeta={pathMeta}
      steps={steps}
      step={step}
      stepIndex={state.stepIndex}
      completed={state.completed}
      completedCount={completedCount}
      pct={pct}
      state={state}
      setState={setState}
      onComplete={markCompleteAndNext}
      onBack={() =>
        setState((s) => (s.stepIndex > 0 ? { ...s, stepIndex: s.stepIndex - 1 } : s))
      }
      onGoToStep={(i) => {
        if (i < 0 || i >= steps.length || i > completedCount) return;
        setState((s) => ({ ...s, stepIndex: i }));
      }}
      copyText={copyText}
    />
  );
}

function Wizard({
  pathMeta,
  steps,
  step,
  stepIndex,
  completed,
  completedCount,
  pct,
  state,
  setState,
  onComplete,
  onBack,
  onGoToStep,
  copyText,
}: {
  pathMeta: PortalPath;
  steps: PortalPath["steps"];
  step: PortalPath["steps"][number];
  stepIndex: number;
  completed: Record<string, boolean>;
  completedCount: number;
  pct: number;
  state: PortalState;
  setState: React.Dispatch<React.SetStateAction<PortalState>>;
  onComplete: () => void;
  onBack: () => void;
  onGoToStep: (i: number) => void;
  copyText: (text: string, label: string) => void;
}) {
  const host = useMemo(() => HOSTS.find((h) => h.id === state.host), [state.host]);
  const plan = useMemo(
    () => MANAGED_PLANS.find((p) => p.id === state.plan) ?? MANAGED_PLANS[1],
    [state.plan],
  );

  return (
    <div className="min-h-dvh flex flex-col lg:flex-row bg-black text-white">
      <aside className="hidden lg:flex w-[40%] shrink-0 flex-col border-r border-white/[0.08] bg-[#0a0a0a] p-8 xl:p-10">
        <Link
          href="/"
          className="mb-12 text-sm tracking-tight lowercase text-white/80 hover:text-white"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          dglxss
        </Link>
        <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-white/40">{pathMeta.phaseLabel}</p>
        <h1
          className="mt-3 text-2xl xl:text-3xl text-white tracking-tight lowercase"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          Follow these {steps.length} steps
        </h1>
        <div className="mt-10 space-y-2.5">
          {steps.map((s, i) => {
            const isDone = !!completed[s.id];
            const isCurrent = i === stepIndex;
            const isLocked = i > completedCount;
            return (
              <button
                key={s.id}
                type="button"
                disabled={isLocked}
                onClick={() => onGoToStep(i)}
                className={`flex w-full items-center gap-3 rounded-2xl border px-3.5 py-3.5 text-left transition-colors ${
                  isDone
                    ? "border-white/15 bg-white/[0.06] text-white/80"
                    : isCurrent
                      ? "border-white/40 bg-white text-black"
                      : "border-white/[0.08] bg-white/[0.02] text-white/50"
                } ${isLocked ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    isDone
                      ? "bg-white/20 text-white"
                      : isCurrent
                        ? "bg-black text-white"
                        : "bg-white/10 text-white/50"
                  }`}
                >
                  {isDone ? <Check size={14} strokeWidth={2.5} /> : i + 1}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{s.short}</span>
                  {isCurrent && (
                    <span className="mt-0.5 block text-[11px] opacity-55">You are here</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-auto pt-10">
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-white/40">
            Step {stepIndex + 1} of {steps.length}
          </p>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto px-5 sm:px-8 py-8 max-w-xl mx-auto w-full lg:max-w-none lg:mx-0 lg:px-12 lg:py-10">
        <div className="lg:hidden mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white"
          >
            <ArrowLeft size={16} /> dglxss
          </Link>
          <span className="text-xs text-white/40">
            {stepIndex + 1}/{steps.length}
          </span>
        </div>
        <div className="lg:hidden mb-6 h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-white transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="liquid-glass-card rounded-2xl p-5 mb-6">
          <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-white/42">Director</p>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{step.director}</p>
        </div>

        <h2
          className="text-2xl sm:text-3xl text-white tracking-tight lowercase"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          {step.title}
        </h2>
        <p className="mt-2 text-sm text-white/55 leading-relaxed">{step.body}</p>

        {step.hostPicker && (
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {HOSTS.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setState((s) => ({ ...s, host: h.id }))}
                className={`min-h-[48px] rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                  state.host === h.id
                    ? "border-white bg-white text-black"
                    : "border-white/15 bg-white/[0.03] text-white/70 hover:bg-white/[0.06]"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
        )}

        {step.dns && (
          <div className="mt-6 space-y-3">
            {[
              { label: "A Record", value: DNS.aRecord },
              { label: "CNAME", value: DNS.cname },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <div>
                  <p className="text-xs text-white/40">{row.label}</p>
                  <p className="font-mono text-sm text-white/90">{row.value}</p>
                </div>
                <button
                  type="button"
                  onClick={() => copyText(row.value, row.label)}
                  className="liquid-glass rounded-lg px-3 py-2 text-xs font-medium text-white/70 hover:text-white inline-flex items-center gap-1.5"
                >
                  <Copy size={14} /> Copy
                </button>
              </div>
            ))}
          </div>
        )}

        {step.hostHelp && (
          <div className="mt-6 liquid-glass-card rounded-2xl p-5">
            {host ? (
              <>
                <p className="text-sm font-semibold text-white">{host.label} — exact clicks</p>
                {host.portalUrl && (
                  <a
                    href={host.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex h-12 items-center rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-white/90"
                  >
                    {host.portalLabel} →
                  </a>
                )}
                <ol className="mt-4 space-y-2 list-none pl-0">
                  {host.steps.map((s, i) => (
                    <li key={i} className="text-sm text-white/55">
                      <span className="font-medium text-white/80">{i + 1}.</span> {s}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs text-white/40">Stuck? Screenshot and email {SUPPORT_EMAIL}</p>
              </>
            ) : (
              <p className="text-sm text-white/50">Pick your host on the previous step first.</p>
            )}
          </div>
        )}

        {step.plans && (
          <div className="mt-6 grid gap-3">
            {MANAGED_PLANS.map((p) => {
              const sel = state.plan === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setState((s) => ({ ...s, plan: p.id }))}
                  className={`rounded-2xl border p-5 text-left transition-colors ${
                    sel
                      ? "border-white bg-white text-black"
                      : "border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex justify-between gap-3">
                    <div>
                      <span className="font-semibold">{p.name}</span>
                      {p.recommended && (
                        <span
                          className={`ml-2 text-[10px] rounded-full px-2 py-0.5 ${
                            sel ? "bg-black/10 text-black/70" : "bg-white/10 text-white/60"
                          }`}
                        >
                          Most popular
                        </span>
                      )}
                      <p className={`mt-1 text-sm ${sel ? "text-black/60" : "text-white/50"}`}>
                        {p.blurb}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xl font-semibold">${p.price}</p>
                      <p className="text-xs opacity-60">/mo</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {step.contactForm && (
          <div className="mt-6 space-y-3">
            {(
              [
                ["name", "Name", "text"],
                ["email", "Email", "email"],
                ["domain", "Domain", "text"],
              ] as const
            ).map(([key, label, type]) => (
              <label key={key} className="block">
                <span className="text-xs text-white/45">{label}</span>
                <input
                  type={type}
                  value={state.contact[key]}
                  onChange={(e) =>
                    setState((s) => ({
                      ...s,
                      contact: { ...s.contact, [key]: e.target.value },
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/40"
                  placeholder={key === "domain" ? "yourdomain.com" : undefined}
                />
              </label>
            ))}
          </div>
        )}

        {step.accessOptions && (
          <div className="mt-6 grid gap-3">
            {(
              [
                ["invite", "Invite dglxss to my domain"],
                ["dns", "Send me DNS instructions"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setState((s) => ({ ...s, accessMode: id }))}
                className={`rounded-xl border px-4 py-4 text-left transition-colors ${
                  state.accessMode === id
                    ? "border-white bg-white text-black"
                    : "border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.05]"
                }`}
              >
                <p className="text-sm font-semibold">{label}</p>
              </button>
            ))}
          </div>
        )}

        {step.summary && (
          <div className="mt-6 liquid-glass-card rounded-2xl p-5 text-sm text-white/70 space-y-2">
            <p>
              Plan: <strong className="text-white">{plan.name}</strong> ${plan.price}/mo
            </p>
            <p>Email: {state.contact.email || "—"}</p>
            <p>Domain: {state.contact.domain || "—"}</p>
            <p className="text-xs text-white/40 pt-1">Hosting: dglxss (our Vercel)</p>
          </div>
        )}

        {step.complete && (
          <div className="mt-6 liquid-glass-card rounded-2xl p-5 border border-white/20">
            <p className="font-semibold text-white">You are all set</p>
            <p className="mt-2 text-sm text-white/55">We will email you when live.</p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-4 inline-flex text-sm text-white/80 hover:text-white"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onComplete}
            className="h-14 px-7 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            {step.actionLabel}
          </button>
          {stepIndex > 0 && (
            <button
              type="button"
              onClick={onBack}
              className="h-14 px-5 rounded-full liquid-glass text-sm text-white/70 hover:text-white transition-colors"
            >
              Back
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
