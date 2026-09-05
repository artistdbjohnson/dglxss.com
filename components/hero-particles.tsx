"use client";

import { useLayoutEffect, useRef } from "react";

type Particle = {
  r: number;
  a0: number;
  w: number;
  s: number;
  o: number;
  ey: number;
  cx: number;
  cy: number;
  ph: number;
  tw: number;
  layer: 0 | 1 | 2;
};

/**
 * Continuous seamless particle sky.
 * On scroll, the field becomes a thin left/right border
 * outside the card column — not behind the cards.
 */
export function HeroParticles({
  density = 1,
  dim = 1,
  splitOnScroll = false,
}: {
  density?: number;
  dim?: number;
  splitOnScroll?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    const t0 = performance.now();
    let running = true;
    let part = 0;
    let targetPart = 0;

    const rand = (min: number, max: number) =>
      min + Math.random() * (max - min);

    const readScroll = () => {
      if (!splitOnScroll || reduceMotion) {
        targetPart = 0;
        return;
      }
      const vh = Math.max(window.innerHeight, 1);
      const panel = document.getElementById("portfolio");
      let raw = 0;
      if (panel) {
        raw = 1 - panel.getBoundingClientRect().top / vh;
      } else {
        raw = window.scrollY / vh;
      }
      raw = Math.min(1, Math.max(0, raw));
      targetPart = raw < 0.08 ? 0 : raw;
    };

    const seed = () => {
      particles = [];
      const area = w * h;
      const aspect = w / Math.max(h, 1);

      const base = Math.floor(Math.sqrt(area) * 2.4 * density);
      const count = Math.min(420, Math.max(90, base));
      const cover = Math.hypot(w * 0.5, h * 0.5) * 1.12;
      const baseEy =
        aspect > 1.5 ? 0.8 : aspect > 1.2 ? 0.84 : aspect < 0.7 ? 1.05 : 0.92;
      const sizeBoost = w > 1100 ? 1.12 : w < 500 ? 1.04 : 1;

      for (let i = 0; i < count; i++) {
        const layer = (i % 3) as 0 | 1 | 2;
        const u = Math.sqrt(Math.random());
        const rNorm =
          layer === 0
            ? 0.05 + u * 0.48
            : layer === 1
              ? 0.24 + u * 0.55
              : 0.42 + u * 0.65;

        const speedBase =
          layer === 0 ? 0.00018 : layer === 1 ? 0.0001 : 0.000055;

        particles.push({
          r: rNorm * cover,
          a0: rand(0, Math.PI * 2),
          w: speedBase * rand(0.55, 1.5) * (Math.random() > 0.48 ? 1 : -1),
          s:
            (layer === 0
              ? rand(1.1, 2.8)
              : layer === 1
                ? rand(0.55, 1.8)
                : rand(0.3, 1.2)) * sizeBoost,
          o:
            (layer === 0
              ? rand(0.28, 0.78)
              : layer === 1
                ? rand(0.16, 0.52)
                : rand(0.1, 0.36)) * dim,
          ey: baseEy * rand(0.93, 1.1),
          cx: w * 0.5 + rand(-w * 0.1, w * 0.1),
          cy: h * 0.5 + rand(-h * 0.08, h * 0.1),
          ph: rand(0, Math.PI * 2),
          tw: rand(0.0005, 0.002),
          layer,
        });
      }

      const cols = aspect > 1.2 ? 8 : aspect > 1 ? 7 : 5;
      const rows = aspect > 1.2 ? 6 : aspect > 1 ? 6 : 8;
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          if (Math.random() > 0.55) continue;
          const jx = (gx + 0.5) / cols + rand(-0.03, 0.03);
          const jy = (gy + 0.5) / rows + rand(-0.03, 0.03);
          particles.push({
            r: rand(4, Math.min(w, h) * 0.12),
            a0: rand(0, Math.PI * 2),
            w: rand(0.00003, 0.00014) * (Math.random() > 0.5 ? 1 : -1),
            s: rand(0.3, 1.4) * sizeBoost,
            o: rand(0.08, 0.4) * dim,
            ey: rand(0.78, 1.15),
            cx: jx * w + rand(-10, 10),
            cy: jy * h + rand(-10, 10),
            ph: rand(0, Math.PI * 2),
            tw: rand(0.0004, 0.0016),
            layer: 2,
          });
        }
      }
    };

    const paint = (now: number) => {
      const elapsed = now - t0;
      part += (targetPart - part) * 0.1;
      if (Math.abs(targetPart - part) < 0.001) part = targetPart;
      const ease = part * part * (3 - 2 * part);

      ctx.clearRect(0, 0, w, h);

      const ambient = ctx.createRadialGradient(
        w * 0.5,
        h * 0.48,
        0,
        w * 0.5,
        h * 0.5,
        Math.hypot(w, h) * 0.75,
      );
      ambient.addColorStop(0, `rgba(255,255,255,${0.04 * dim * (1 - ease * 0.35)})`);
      ambient.addColorStop(0.45, `rgba(255,255,255,${0.014 * dim})`);
      ambient.addColorStop(1, `rgba(255,255,255,${0.004 * dim})`);
      ctx.fillStyle = ambient;
      ctx.fillRect(0, 0, w, h);

      for (const [cx, cy, r, a] of [
        [0.12, 0.14, 0.4, 0.018],
        [0.88, 0.16, 0.38, 0.016],
        [0.1, 0.86, 0.42, 0.018],
        [0.9, 0.84, 0.4, 0.016],
        [0.5, 0.08, 0.35, 0.014],
        [0.5, 0.92, 0.35, 0.014],
      ] as const) {
        const cg = ctx.createRadialGradient(
          w * cx,
          h * cy,
          0,
          w * cx,
          h * cy,
          Math.min(w, h) * r,
        );
        cg.addColorStop(0, `rgba(255,255,255,${a * dim * (1 - ease * 0.4)})`);
        cg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = cg;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.globalCompositeOperation = "lighter";

      const mid = w * 0.5;
      // Thin edge border. Stays in the side gutters, never the card column.
      const gutter = Math.max(16, Math.min(w * 0.072, 36));

      for (const p of particles) {
        const angle = p.a0 + p.w * elapsed;
        const twinklePhase = p.ph + p.tw * elapsed;

        let px = p.cx + Math.cos(angle) * p.r;
        let py = p.cy + Math.sin(angle) * p.r * p.ey;

        if (px < -50) px += w + 100;
        if (px > w + 50) px -= w + 100;
        if (py < -50) py += h + 100;
        if (py > h + 50) py -= h + 100;

        if (ease > 0.001) {
          const side = px < mid ? -1 : 1;
          const scatter = ((p.ph % 1) - 0.5) * gutter * 0.55;
          const target =
            side < 0 ? gutter * 0.42 + scatter : w - gutter * 0.42 + scatter;
          px = px + (target - px) * ease;
          py = py + ease * h * 0.03;
          const maxX = gutter + 2;
          if (side < 0 && px > maxX) px = maxX;
          if (side > 0 && px < w - maxX) px = w - maxX;
          if (px < 2) px = 2;
          if (px > w - 2) px = w - 2;
        }

        const twinkle = 0.52 + 0.48 * Math.sin(twinklePhase);
        const alpha = Math.min(1, p.o * twinkle);
        const glowR = p.s * (p.layer === 0 ? 5.2 : 4.0);

        const glow = ctx.createRadialGradient(px, py, 0, px, py, glowR);
        glow.addColorStop(0, `rgba(255,255,255,${alpha * 0.4})`);
        glow.addColorStop(0.32, `rgba(255,255,255,${alpha * 0.12})`);
        glow.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, glowR, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.4, p.s * 0.5), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth || window.innerWidth;
      h = canvas.clientHeight || window.innerHeight;
      if (w < 2 || h < 2) {
        w = window.innerWidth;
        h = window.innerHeight;
      }
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      readScroll();
      paint(performance.now());
    };

    resize();

    const ro = new ResizeObserver(() => {
      if (!running) return;
      resize();
    });
    ro.observe(canvas);

    window.addEventListener("scroll", readScroll, { passive: true });

    const loop = (now: number) => {
      if (!running) return;
      if (!reduceMotion) {
        paint(now);
        rafRef.current = requestAnimationFrame(loop);
      }
    };

    if (reduceMotion) {
      paint(performance.now());
    } else {
      rafRef.current = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      ro.disconnect();
      window.removeEventListener("scroll", readScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [density, dim, splitOnScroll]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full bg-black"
      width={1}
      height={1}
      aria-hidden="true"
    />
  );
}
