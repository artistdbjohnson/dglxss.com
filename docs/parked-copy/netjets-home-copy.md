# NetJets homepage — EXHAUSTIVE COPY DECK (verbatim)

**HARD LOCK (Doug / CRO):** Restyle + redesign ONLY. Transfer EVERY word from https://www.netjets.com/en-us/. ZERO invented copy.

**Rebuild:** Motionsites dark-liquid-glass hero chrome may stay; AFTER hero, transplant original homepage elements/copy. Attribution (rebuild only): `built by dglxss` — no Grok / xAI / Motionsites.

**Sources:**
- Live DOM crawl (body sections / hero carousel) — verified earlier + matching SSR where present
- SSR HTML snapshot `/workspace/netjets-copy-audit/home.html` (nav, contact, footer) — 2026-09-04

**Verification flags:** Body hero/pinnacle/cards are client-rendered (SSR shows empty `100vh` shells). Those strings are from live browser DOM, not SSR. Marked `[LIVE DOM]`. SSR-confirmed marked `[SSR]`.

---

## A. Document / SEO (not always visible UI)

```
Making the Impossible Possible. Only NetJets.  # breadcrumb schema name [SSR]
World's largest private jet company offering fractional aircraft ownership, private jet leases, and jet card programs. A Berkshire Hathaway company.  # org schema description [SSR]
```

---

## B. Header / utility / chrome `[SSR]`

Logo wordmark (SVG title):
```
NetJets
```
Font note: legacy italic sans; distinctive capital J.

Icons / controls:
```
Search Icon
Close Search
CONTACT US   # primary utility CTA (opens request/call panel)
```

Desktop/main toggles (CSS often uppercases):
```
Unmatched Experience
Our Programs & Aircraft
Language
More
US   # region chip (also GB, DE, FR, ES, IT, PT)
```

---

## C. Mega-menu — Unmatched Experience `[SSR]`

Promo strip:
```
Experience The
Bombardier Global
7500/8000
```
→ `/en-us/bombardier-global-7500`

| Label | href |
|---|---|
| Do More and Miss Less | /en-us/luxury-private-jet-travel |
| Safety | /en-us/private-jet-safety |
| Expert Crews | /en-us/private-jet-safety?go=expert-crews |
| Safety Insights | /en-us/safety-insights |
| Safety Culture | /en-us/private-jet-safety?go=safety-culture |
| Personal Security | /en-us/private-jet-safety?go=personal-security |
| Fleet Maintenance | /en-us/private-jet-safety?go=fleet-maintenance |
| Service | /en-us/private-jet-services |
| Dedicated to You | private-jet-services?go=dedicated-to-you  # LIVE BUG: missing /en-us/ prefix |
| Beyond Expectations | /en-us/private-jet-services?go=beyond-expectations-always |
| The Best in the Business | /en-us/private-jet-services?go=the-best-in-the-business |
| Access | /en-us/private-jet-access |
| Largest Fleet | /en-us/private-jet-access?go=largest-fleet |
| Innovative Aircraft | /en-us/private-jet-access?go=innovative-aircraft |
| The Promise of Always | /en-us/private-jet-access?go=the-promise-of-always |
| Exclusives | /en-us/exclusives |
| Events | /en-us/events |
| Benefits | /en-us/benefits |
| Car & Security Services | /en-us/car-security-services |

---

## D. Mega-menu — Our Programs & Aircraft `[SSR]`

| Label | href |
|---|---|
| Programs | /en-us/private-jet-programs |
| NetJets Share | /en-us/private-jet-share-program |
| NetJets Card | /en-us/private-jet-card-program |
| Compare Shares & Cards | /en-us/jet-card-cost-comparison |
| Sustainability | /en-us/sustainability |
| Understand Our Pricing | /en-us/private-jet-cost-pricing |
| Compare Private Aviation Services | /en-us/private-aviation-services |
| 9 Questions for Providers | /en-us/fractional-aircraft-ownership/ |
| The NetJets Fleet | (section header, no nav) |
| Overview | /en-us/compare-luxury-private-jets |
| Long-Range Jets | (category) |
| Bombardier Global 7500/8000 | /en-us/bombardier-global-7500 |
| Bombardier Global 6000 | /en-us/bombardier-global-6000 |
| Bombardier Global 5000/5500 | /en-us/bombardier-global-5500 |
| Large Jets | (category) |
| Bombardier Challenger 650 | /en-us/bombardier-challenger-650 |
| Super-Midsize Jets | (category) |
| Cessna Citation Longitude | /en-us/cessna-citation-longitude |
| Bombardier Challenger 350/3500 | /en-us/bombardier-challenger-350 |
| Midsize Jets | (category) |
| Embraer Praetor 500 | /en-us/embraer-praetor-500 |
| Cessna Citation Latitude | /en-us/cessna-citation-latitude |
| Cessna Citation Sovereign | /en-us/cessna-citation-sovereign |
| Cessna Citation Ascend | /en-us/cessna-citation-ascend |
| Cessna Citation XLS | /en-us/cessna-citation-excel-xls |
| Light Jets | (category) |
| Embraer Phenom 300/E | /en-us/embraer-phenom-300 |

Category passenger teasers seen in earlier LIVE DOM mega-menu (desktop):
```
LONG-RANGE JETS / up to 14 Passengers
LARGE JETS / up to 11 Passengers
SUPER-MIDSIZE JETS / up to 8 Passengers
MIDSIZE JETS / up to 8 Passengers
LIGHT JETS / up to 6 Passengers
```
`[LIVE DOM — category passenger lines; confirm if still shown on current desktop mega-menu]`

Also seen earlier as nav label: `FLEET COMPARISON` → `/en-us/compare-luxury-private-jets` `[LIVE DOM]`

---

## E. Language `[SSR]`

| Label | href |
|---|---|
| US | /en-us/ |
| GB | /en-gb/ |
| DE | /de-de/ |
| FR | /fr-fr/ |
| ES | /es-es/ |
| IT | /it-it/ |
| PT | /pt-pt/ |

---

## F. More menu `[SSR]`

| Label | href |
|---|---|
| Login | https://fly.netjets.com/applogin |
| News | /en-us/news |
| Careers | /en-us/careers |
| Suite of Solutions | /en-us/private-aviation-solutions |
| Discover the Global Leader | /en-us/leaders-in-private-aviation |
| Outreach | /en-us/outreach |
| Press Center | /en-us/press-center |

---

## G. Hero carousel `[LIVE DOM]`

Slide 1
```
MIDSIZE, MAXIMIZED
OWN THE NEW CESSNA CITATION ASCEND
```
→ `/en-us/age-of-ascend`

Slide 2
```
LATEST EDITION OF NETJETS SAFETY INSIGHTS NOW AVAILABLE
ACCESS THE NEWEST ISSUE OF OUR SAFETY PUBLICATION
```
→ `/en-us/safety-insights`

Slide 3
```
WHICH PROGRAM IS BEST FOR YOU?
COMPARE OUR SHARE AND CARD TO FIND YOUR IDEAL SOLUTION
```
→ `/en-us/jet-card-cost-comparison`

Counter chrome: `1 3` · `2 3` · `3 3` (space, no slash) — see §Q

---

## H. Pinnacle `[LIVE DOM]`

```
THE PINNACLE OF PRIVATE TRAVEL
FROM THE PIONEER OF FRACTIONAL AIRCRAFT OWNERSHIP
```

Body (exact — em dash; NetJets®):
```
Expect the world with NetJets—the leading fractional aircraft company offering superior solutions favored by the most discerning travelers. Our vast, versatile private jet fleet, operational excellence, and proven business model ensure seamlessness and stability that is unmatched. Only NetJets®, a proud Berkshire Hathaway company, empowers luxury travel on your terms, marked by our resolute commitment to the highest safety standards, personalized service, and global access.
```

---

## I. Four cards + luxury band `[LIVE DOM]`

### Card 1 — Cost transparency
Mobile wrap (CSS only — NOT authored breaks; see §Q):
```
COST TRANSPARENCY,
INVESTMENT,
CONFIDENCE
```
Single-line DOM alternate: `COST TRANSPARENCY, INVESTMENT CONFIDENCE`
```
Explore premium programs with predictable pricing
```
→ `/en-us/private-jet-cost-pricing`

### Card 2 — New aircraft
```
80+ NEW AIRCRAFT ARRIVING IN 2026
Tour the growing, global NetJets fleet
```
→ `/en-us/compare-luxury-private-jets`

### Unsurpassable luxury (between cards in mobile scroll order per brief)
```
UNSURPASSABLE LUXURY
Flying with NetJets means seamless travel and personalized experiences.
```

### Card 3 — Corporate
```
CORPORATE TRAVEL,
PERFECTED
```
or single-line: `CORPORATE TRAVEL, PERFECTED`
```
Enhance your competitive edge
```
→ `/en-us/business-jet-travel`

### Card 4 — Vs others
```
NETJETS VS. OTHERS
See why NetJets is the only choice in private travel
```
→ `/en-us/private-aviation-services`

---

## J. News CTA `[SSR + LIVE]`

```
See all NetJets News
```
→ `/en-us/news`

`[UNVERIFIED LIVE — individual news card headlines/dates on homepage module]` — SSR did not include news card bodies; re-pull from live if CRO requires every news teaser string.

---

## K. Explore / contact panel `[SSR]`

```
Explore the Possibilities
We have the right solution to fit your unique travel needs.
Request Information
Call Us
```
(CSS may render REQUEST INFORMATION / CALL US / EXPLORE THE POSSIBILITIES in all caps.)

Phone display (DOM splits `+` into its own span):
```
+1.877.356.5823
```
href: `tel:+1.877.356.5823`

```
Call today for a personal consultation with one of our private aviation experts.
```

Thank-you state:
```
Thank You
We appreciate your interest in NetJets. A member of our team will be in touch very shortly to discuss your needs.
```

Consent line `[LIVE DOM — form; not in this SSR slice]`:
```
By submitting this form, you consent to be contacted by NetJets and its affiliates and to have your personal data processed, stored, and used in accordance with the terms set out in our Privacy Policy.
Submit
```
`Privacy Policy` link → `/en-us/privacy` (earlier live note) — **re-verify href on form**.

---

## L. Footer `[SSR]`

Social aria-labels:
```
NetJets on LinkedIn
NetJets on Instagram
NetJets on YouTube
```

```
+1.877.356.5823
4111 Bridgeway Avenue, Columbus, Ohio 43219
Other NetJets Companies
Executive Jet Management
QS Partners
QS Security
© 2026 NetJets IP, LLC
Careers
Global Network
Legal & Privacy
CA Privacy
Sitemap
```

| Label | href |
|---|---|
| Executive Jet Management | https://www.executivejetmanagement.com/s/ |
| QS Partners | https://www.qspartners.com |
| QS Security | https://qssecurity.com/ |
| Careers | /en-us/careers |
| Global Network | /en-us/locations/ |
| Legal & Privacy | /en-us/privacy-main |
| CA Privacy | /en-us/ccpa-privacy-policy |
| Sitemap | /en-us/sitemap |
| Address (maps) | https://www.google.com/maps/search/?api=1&query=4111%20Bridgeway%20Avenue%2C%20Columbus%2C%20Ohio%2043219 |

Aria: `scroll to top`

Earlier LIVE DOM also saw button label:
```
DO NOT SELL OR SHARE MY PERSONAL INFORMATION
```
`[UNVERIFIED in this SSR snapshot — may be CMP-injected; confirm on live]`

---

## M. Cookie banner `[LIVE DOM — earlier crawl]`

```
We use cookies and similar technologies to ensure that users have an optimal experience during their visit. We also use these technologies to share information about the use of our website for analytics, advertising and marketing. Click the "Cookie Preferences" button to manage your cookie preferences and/or opt out of targeted advertising. By continuing to use our website, you agree to our website Terms of Use and Privacy Policy.
Cookie Preferences
Agree
Close
```
Links: Legal & Privacy Notices → `/en-us/privacy-main`; CA Privacy Notice → `/en-us/ccpa-privacy-policy`
`[Re-verify live — CMP may vary by region]`

---

## N. Rebuild-only attribution (NOT on original)

```
built by dglxss
```

---

## O. Homepage scroll order for transplant (after Motionsites hero)

1. Header: NetJets wordmark + CONTACT US (+ Search)
2. Optional: keep Motionsites hero OR original carousel §G
3. §H Pinnacle
4. §I cards + Unsurpassable luxury
5. §J See all NetJets News
6. §K Explore + Request Information / Call Us + phone + consultation
7. §L Footer (+ §N built by dglxss)
8. Nav mega-menus §C–F available from header

---

## P. UNVERIFIED / gaps to close before CRO sign-off

1. Homepage **news module card** headlines, dates, blurbs — live hydrate still had **no text nodes** (image/CMS). Only `See all NetJets News` confirmed.
2. ~~Request Information form field labels~~ — **CLOSED** in §Q.
3. ~~Cookie / DO NOT SELL~~ — **CLOSED** (confirmed live; see §Q / §M / §L).
4. Desktop mega-menu **passenger count** lines — earlier LIVE DOM; re-confirm if wiring fleet strip chrome.
5. ~~Authored mobile line breaks for cards~~ — **CLOSED**: CSS wrap only; do not encode breaks (§Q).

— Wren · exhaustive deck · zero invention · HARD LOCK

---

## Q. LIVE RE-VERIFY PATCH (Playwright hydrate, desktop 1440, 2026-09-04)

Source dumps: `/workspace/nj-copydeck/innertext2.txt`, `leaf2.json`, `text.json`.

### Corrections / clarifications
1. **Site typeface:** `GT-Zirkon` (design note for Kit/logo lane — not a copy string).
2. **Hero counter chrome:** rendered `1 3` / `2 3` / `3 3` (space, no slash) — not `1 / 3`.
3. **Card headlines:** DOM is **single string**, no `<br>`. e.g. `Cost Transparency, Investment Confidence` (CSS wraps). Do **not** encode authored line breaks for COST TRANSPARENCY / CORPORATE TRAVEL.
4. **Scroll order confirmed:** UNSURPASSABLE LUXURY sits **between** card 2 (`80+ NEW AIRCRAFT…`) and card 3 (`CORPORATE TRAVEL…`).
5. **Phone:** DOM = `+` span + `1.877.356.5823` with **no space character**. Tracking can look like `+ 1.877.356.5823`. Canonical copy string remains `+1.877.356.5823`.
6. **CONTACT US** utility: DOM `Contact Us` → CSS uppercase.
7. **Footer companies:** DOM title-case (`Executive Jet Management`, etc.) → CSS uppercase on live.
8. **DO NOT SELL OR SHARE MY PERSONAL INFORMATION** — confirmed present (DOM: `Do Not Sell or Share My Personal Information`).
9. **Cookie banner** — confirmed present (text as in §M).
10. **News module cards** — still **no text nodes** in hydrate (image/CMS). Teaser headlines remain UNVERIFIED; only `See all NetJets News` is confirmed.

### Request Information form fields (exact, in order) — CLOSES prior gap
```
First Name
Last Name
Company Name (Optional)
Primary Residence
Country
ZIP
Phone Number
Email
Comments (Optional)
How did you hear about NetJets?
Submit
```
Consent (exact structure):
```
By submitting this form, you consent to be contacted by NetJets and its affiliates and to have your personal data processed, stored, and used in accordance with the terms set out in our Privacy Policy.
```
(`Privacy Policy.` is the linked trailing phrase.)

### Hero DOM casing (CSS uppercases most)
| Rendered (CSS) | DOM |
|---|---|
| MIDSIZE, MAXIMIZED | MIDSIZE, MAXIMIZED (already upper) |
| OWN THE NEW CESSNA CITATION ASCEND | OWN THE NEW… (already upper) |
| LATEST EDITION… | Latest Edition of NetJets Safety Insights Now Available |
| ACCESS THE NEWEST… | Access the newest issue of our safety publication |
| WHICH PROGRAM IS BEST FOR YOU? | Which Program Is Best For You? |
| COMPARE OUR SHARE… | Compare Our Share And Card To Find Your Ideal Solution |

Wire either DOM or rendered consistently; prefer **rendered marketing case** for on-page transplant to match CRO’s live view, keep DOM notes for a11y if needed.

### Remaining gaps
- Individual homepage **news card** headlines/dates (CMS images / empty text nodes)
- Mobile-only visual wrap of long headlines (CSS only — not copy)

— Wren · live re-verify patch
