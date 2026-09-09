# Executive Jet Management homepage — EXHAUSTIVE COPY DECK (verbatim)

**HARD LOCK:** Restyle + redesign ONLY. Transfer EVERY word + link from https://www.executivejetmanagement.com/s/. ZERO invented copy. Triple-check.

**Rebuild craft:** Mobile-first PWA matching NetJets rebuild (Motionsites chassis). Attribution (rebuild only): `built by dglxss` — no Grok / xAI / Motionsites.

**Sources:**
- Live browser DOM crawl of https://www.executivejetmanagement.com/s/ — 2026-09-04
- Cross-check: WebFetch SSR/text shell (partial; Lightning SPA)

**Hero media (REBUILD MANDATE — not present on live):** Live homepage uses a **static aircraft image** (no YouTube / video embeds). Studio lead requires a seamless 3-clip YouTube fade slideshow (loop, muted, cover framing, no stretch on mobile), order:
1. `https://youtu.be/g2kO2MNMCxM`
2. `https://youtu.be/kmsn3kJCO3k`
3. `https://youtu.be/gQMZppFmeqA`
Hero **words** below remain live-exact. Do not invent hero CTAs (live has none).

**Verification:** Salesforce/Lightning-rendered. Strings below are from live DOM unless marked `[WEBFETCH]`. Prefer live DOM on conflict.

---

## A. Document / SEO

```
Executive Jet Management | Aircraft Management Company | EJM
```
Description:
```
Executive Jet Management is a leader in aircraft management and private jet charter programs. Learn more about EJM's private travel services.
```

---

## B. Header / nav

Logo: `EJM` / `A NETJETS COMPANY` (artwork; no separate text href exposed in crawl)

| Label | href / note |
|---|---|
| Skip to Main Content | `javascript:void(0);` |
| Home | https://www.executivejetmanagement.com/s/ |
| Aircraft Management | mega button (no href) |
| → Aircraft Management | https://www.executivejetmanagement.com/s/aircraft-management |
| → Our Network | https://www.executivejetmanagement.com/s/aircraft-management-services |
| → Offset Private Jet Costs | https://www.executivejetmanagement.com/s/offset-private-jet-costs |
| → Financing | https://www.executivejetmanagement.com/s/aircraft-financing-qsf |
| Private Jet Charter | mega button (no href) |
| → Private Jet Charter | https://www.executivejetmanagement.com/s/private-jet-charter-flights |
| → Private Jet Charter Cost | https://www.executivejetmanagement.com/s/private-jet-charter-cost |
| → Popular Destinations | https://www.executivejetmanagement.com/s/private-jet-charter-near-me |
| → Empty Leg Flights | https://www.executivejetmanagement.com/s/empty-leg-flights |
| More | mega button (no href) |
| → Fleet (parent) | `javascript:void(0);` |
| → Fleet | https://www.executivejetmanagement.com/s/private-charter-aircraft |
| → Light Jets | https://www.executivejetmanagement.com/s/light-jet-charter |
| → Midsize Jets | https://www.executivejetmanagement.com/s/midsize-jet-charter |
| → Super-Midsize Jets | https://www.executivejetmanagement.com/s/super-midsize-jet-charter |
| → Large Jets | https://www.executivejetmanagement.com/s/large-jet-charter |
| → Long-Range Jets | https://www.executivejetmanagement.com/s/long-range-jet-charter |
| → Our Company (parent) | `javascript:void(0);` |
| → EJM Overview | https://www.executivejetmanagement.com/s/executive-leadership |
| → Safety | https://www.executivejetmanagement.com/s/private-jet-safety |
| → Careers | https://www.executivejetmanagement.com/s/careers |
| → Social Responsibility | https://www.executivejetmanagement.com/s/carbon-offset-program |
| Contact Us | https://www.executivejetmanagement.com/s/contact-us |

Top-level labels also observed in shell: `Fleet`, `Our Company` (as top items collapsing into More on some breakpoints) — keep live mega structure; do not invent new labels.

---

## C. Hero (words — live exact)

```
Executive Jet Management
Unparalleled Aircraft Management and Private Jet Charter Solutions
```
- No hero CTA on live.
- Live visual: static aircraft image (rebuild replaces with mandated YouTube 3-clip fade only; keep words).

---

## D. Feature cards — Aircraft Management / Charter

### Card 1
Heading: `Aircraft Management`  
Heading href: `https://www.executivejetmanagement.com/s/aircraft-management`  
CTA: `Simplify jet ownership >`  
CTA href: `http://www.executivejetmanagement.com/s/aircraft-management`  
(Note: live uses `http://` on CTA vs `https://` on heading — preserve both as found, or normalize to https only if studio lead directs; default = preserve exact.)

### Card 2
Heading: `Private Jet Charter Flights`  
Heading href: `http://www.executivejetmanagement.com/s/private-jet-charter-flights`  
CTA: `Travel in luxury >`  
CTA href: `http://www.executivejetmanagement.com/s/private-jet-charter-flights`

---

## E. Safety Insights

Heading: `NetJets Safety Insights: New Issue Available`  
(WebFetch italicized brand: *NetJets Safety Insights* — if design needs emphasis, italicize brand words only; do not change spelling.)

Body:
```
Discover how NetJets and its portfolio of companies, including Executive Jet Management (EJM), invest in safety initiatives that drive innovation and inspire excellence industrywide.
```

CTA: `Read the latest edition >`  
href: `https://www.netjets.com/en-us/safety-insights`

---

## F. KPI row

| Eyebrow | Stat | Body |
|---|---|---|
| YEARS OF HERITAGE | 45+ | Our decades of learning mean you are in the best possible hands. |
| AVIATION EXPERTS | 1,000+ | Behind every flight is a global team perfecting your experience. |
| AVERAGE TOTAL SAVINGS | 45% | Our buying power secures aircraft Owners favorable rates on operating costs compared to market rates. |
| AIRPORTS WITHIN REACH | 5,000+ | Seamlessly access over 120 countries and territories. |

CTA: `Explore Our Network`  
href: `https://www.executivejetmanagement.com/s/aircraft-management-services`

---

## G. Charter cost

Heading: `How Much Does a Charter Flight Cost?`  
Body: `Receive an instant estimate with our charter flight price calculator.`  
CTA: `Try it now >`  
href: `https://www.executivejetmanagement.com/s/private-jet-charter-cost`

---

## H. Fleet

Heading: `Explore Our Fleet`

| Label | href |
|---|---|
| Long-Range Jets | https://www.executivejetmanagement.com/s/long-range-jet-charter |
| Large Jets | https://www.executivejetmanagement.com/s/large-jet-charter |
| Super-Midsize Jets | https://www.executivejetmanagement.com/s/super-midsize-jet-charter |
| Midsize Jets | https://www.executivejetmanagement.com/s/midsize-jet-charter |
| Light Jets | https://www.executivejetmanagement.com/s/light-jet-charter |

No per-card blurbs on live homepage fleet strip — do not invent.

---

## I. Who We Are

Heading: `Who We Are`  
Body: `The history that shaped us, the values that guide us, and the people fulfilling our promise to you.`  
CTA: `This is EJM >`  
href: `https://www.executivejetmanagement.com/s/executive-leadership`

---

## J. Careers

Heading: `Join Our Team`  
Body: `EJM is more than a stop on your professional journey—it’s an aviation career destination.`  
(Apostrophe in `it’s` is curly/typographic as live.)  
CTA: `Explore opportunities >`  
href: `https://www.executivejetmanagement.com/s/careers`

---

## K. CTA inventory (homepage)

| Label | href |
|---|---|
| Simplify jet ownership > | http://www.executivejetmanagement.com/s/aircraft-management |
| Travel in luxury > | http://www.executivejetmanagement.com/s/private-jet-charter-flights |
| Read the latest edition > | https://www.netjets.com/en-us/safety-insights |
| Explore Our Network | https://www.executivejetmanagement.com/s/aircraft-management-services |
| Try it now > | https://www.executivejetmanagement.com/s/private-jet-charter-cost |
| This is EJM > | https://www.executivejetmanagement.com/s/executive-leadership |
| Explore opportunities > | https://www.executivejetmanagement.com/s/careers |
| Contact Us | https://www.executivejetmanagement.com/s/contact-us |

---

## L. Footer

```
Contact Us
+1.800.451.2822
4556 Airport Road, Cincinnati, OH 45226
```
Phone href: `tel:1-800-451-2822`  
LinkedIn (icon, unlabeled): `https://www.linkedin.com/company/executive-jet-management/`

Other NetJets Companies:
| Label | href |
|---|---|
| NETJETS US | https://www.netjets.com/en-us/ |
| NETJETS EUROPE | https://www.netjets.com/en-gb/ |
| EJM EUROPE | http://www.ejme.com/ |
| QS PARTNERS | http://www.qspartners.com/ |
| QS SECURITY | https://www.qssecurity.com/ |

Legal / bottom:
```
© 2026 NetJets IP, LLC
```
| Label | href |
|---|---|
| LEGAL AND PRIVACY | https://www.executivejetmanagement.com/s/legal-and-privacy-policies |
| CA PRIVACY | https://www.executivejetmanagement.com/s/ca-privacy |
| SITEMAP | https://www.executivejetmanagement.com/s/sitemap |
| DO NOT SELL OR SHARE MY PERSONAL INFORMATION | button; no href |

```
NetJets Inc. is a Berkshire Hathaway company.
```
`Berkshire Hathaway` → `https://www.berkshirehathaway.com/`

```
Executive Jet Management®, Inc. operates charter air transportation services under 14 CFR Parts 135 and 298.
```

**Rebuild-only credit (append; not on live):** `built by dglxss`

---

## M. Cookie banner (chrome)

```
We use cookies and similar technologies to ensure that users have an optimal experience during their visit. We also use these technologies to share information about the use of our website for analytics, advertising and marketing. Click the "Cookie Preferences" button to manage your cookie preferences and/or opt out of targeted advertising. By continuing to use our website, you agree to our website Terms of Use and Privacy Policy.
```
Buttons: `Cookies Preferences` · `Agree`  
Links: `Legal & Privacy Notices |` → legal-and-privacy-policies · `CA Privacy Notice` → ca-privacy

---

## N. Forms

No visible forms on homepage. Do not invent a request form on home unless a later page deck requires it.

---

## O. Notes for Kit / design

1. Live hero = static image; rebuild hero = mandated 3 YouTube clips (order above), muted, loop, fade, cover (no stretch mobile).
2. Preserve CTA trailing `>` characters exactly where live has them.
3. Mixed `http://` vs `https://` on live — ship exact unless lead normalizes to https.
4. No email on homepage.
5. Zero invented section blurbs, fleet descriptions, or hero CTAs.
6. Tip when implementing: this file is the single copy source for homepage.

— Wren (copy)
