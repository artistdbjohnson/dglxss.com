# Executive Jet Management — homepage COPY DECK (verbatim)

**HARD LOCK:** Restyle / redesign ONLY. EVERY word + link exact from live. ZERO invented marketing copy.

**Canonical recon:** `/workspace/wt/ejm-recon/REPORT.md`  
**Raw:** `/workspace/wt/ejm-recon/copy/homepage-annotated.txt`, `homepage-verbatim.txt`  
**Live:** https://www.executivejetmanagement.com/s/  
**Captured:** 2026-09-04

**Rebuild craft:** Mobile-first PWA / Motionsites chassis (match NetJets rebuild). Attribution (rebuild only): `built by dglxss` — no Grok / xAI / Motionsites.

**Homepage scroll order:** LOCKED to § below (Hero → Dual cards → Safety Insights → Stats → Charter cost → Fleet → Who We Are → Join Our Team → Footer).

**Hero media (REBUILD MANDATE — not on live):** Live hero = static bg `/s/sfsites/c/file-asset/X34ACMpilotboard2?v=1`. Rebuild uses seamless 3-clip YouTube fade slideshow (loop, muted, cover, no stretch on mobile), order:
1. `https://youtu.be/g2kO2MNMCxM`
2. `https://youtu.be/kmsn3kJCO3k`
3. `https://youtu.be/gQMZppFmeqA`  
Hero **words** stay live-exact. No hero CTA on live — do not invent one.

**Owner Portal:** Named in `/s/privacy-us-owners` only. **No public URL** on homepage/nav/footer — do not invent a portal link or CTA.

Base path prefix: `https://www.executivejetmanagement.com` (relative `/s/...` OK on rebuild).

---

## 0. SEO

```
Executive Jet Management | Aircraft Management Company | EJM
```
Description (live meta):
```
Executive Jet Management is a leader in aircraft management and private jet charter programs. Learn more about EJM's private travel services.
```

---

## 1. Header / nav (exact labels + hrefs)

Logo CSS: `https://www.executivejetmanagement.com/file-asset/EJMRLogoTag601x54?v=1` (EJM / A NETJETS COMPANY artwork)

| Label | Type | Href |
|---|---|---|
| Home | link | `/s/` |
| Aircraft Management | dropdown | — |
| → Aircraft Management | link | `/s/aircraft-management` |
| → Our Network | link | `/s/aircraft-management-services` |
| → Offset Private Jet Costs | link | `/s/offset-private-jet-costs` |
| → Financing | link | `/s/aircraft-financing-qsf` |
| Private Jet Charter | dropdown | — |
| → Private Jet Charter | link | `/s/private-jet-charter-flights` |
| → Private Jet Charter Cost | link | `/s/private-jet-charter-cost` |
| → Popular Destinations | link | `/s/private-jet-charter-near-me` |
| → Empty Leg Flights | link | `/s/empty-leg-flights` |
| Fleet | dropdown | — |
| → Fleet | link | `/s/private-charter-aircraft` |
| → Light Jets | link | `/s/light-jet-charter` |
| → Midsize Jets | link | `/s/midsize-jet-charter` |
| → Super-Midsize Jets | link | `/s/super-midsize-jet-charter` |
| → Large Jets | link | `/s/large-jet-charter` |
| → Long-Range Jets | link | `/s/long-range-jet-charter` |
| Our Company | dropdown | — |
| → EJM Overview | link | `/s/executive-leadership` |
| → Safety | link | `/s/private-jet-safety` |
| → Careers | link | `/s/careers` |
| → Social Responsibility | link | `/s/carbon-offset-program` |
| Contact Us | link (header CTA) | `/s/contact-us` |

Note (recon): Sitemap label for financing is “Private Jet Financing” (same href). Nav “Social Responsibility” → `/s/carbon-offset-program`; sitemap also lists `/s/social-responsibility` (different page). Use **nav** href for header.

---

## 2. Homepage body — scroll order LOCKED

### 2.1 Hero
```
Executive Jet Management
Unparalleled Aircraft Management and Private Jet Charter Solutions
```
No CTA.

### 2.2 Dual service cards
**Card A**
- Heading: `Aircraft Management` → `https://www.executivejetmanagement.com/s/aircraft-management`
- CTA: `Simplify jet ownership >` → `http://www.executivejetmanagement.com/s/aircraft-management`

**Card B**
- Heading: `Private Jet Charter Flights` → `http://www.executivejetmanagement.com/s/private-jet-charter-flights`
- CTA: `Travel in luxury >` → `http://www.executivejetmanagement.com/s/private-jet-charter-flights`

Preserve trailing `>` and live `http` vs `https` mix unless lead normalizes.

### 2.3 Safety Insights
```
NetJets Safety Insights: New Issue Available
Discover how NetJets and its portfolio of companies, including Executive Jet Management (EJM), invest in safety initiatives that drive innovation and inspire excellence industrywide.
```
CTA: `Read the latest edition >` → `https://www.netjets.com/en-us/safety-insights`

### 2.4 Stats row
| Label | Stat | Body |
|---|---|---|
| YEARS OF HERITAGE | 45+ | Our decades of learning mean you are in the best possible hands. |
| AVIATION EXPERTS | 1,000+ | Behind every flight is a global team perfecting your experience. |
| AVERAGE TOTAL SAVINGS | 45% | Our buying power secures aircraft Owners favorable rates on operating costs compared to market rates. |
| AIRPORTS WITHIN REACH | 5,000+ | Seamlessly access over 120 countries and territories. |

CTA: `Explore Our Network` → `/s/aircraft-management-services`

### 2.5 Charter cost
```
How Much Does a Charter Flight Cost?
Receive an instant estimate with our charter flight price calculator.
```
CTA: `Try it now >` → `https://www.executivejetmanagement.com/s/private-jet-charter-cost`

### 2.6 Explore Our Fleet
Heading: `Explore Our Fleet`  
(No invented blurbs.)

| Label | Href |
|---|---|
| Long-Range Jets | `/s/long-range-jet-charter` |
| Large Jets | `/s/large-jet-charter` |
| Super-Midsize Jets | `/s/super-midsize-jet-charter` |
| Midsize Jets | `/s/midsize-jet-charter` |
| Light Jets | `/s/light-jet-charter` |

### 2.7 Who We Are
```
Who We Are
The history that shaped us, the values that guide us, and the people fulfilling our promise to you.
```
CTA: `This is EJM >` → `https://www.executivejetmanagement.com/s/executive-leadership`

### 2.8 Join Our Team
```
Join Our Team
EJM is more than a stop on your professional journey—it’s an aviation career destination.
```
(Em dash + curly apostrophe as live.)  
CTA: `Explore opportunities >` → `https://www.executivejetmanagement.com/s/careers`

---

## 3. Footer (exact)

| Text / label | Href / note |
|---|---|
| (LinkedIn icon, empty link text) | `https://www.linkedin.com/company/executive-jet-management/` |
| `+1.800.451.2822` | `tel:1-800-451-2822` |
| `4556 Airport Road, Cincinnati, OH 45226` | plain text |
| `Other NetJets Companies` | heading |
| `NETJETS US` | `https://www.netjets.com/en-us/` |
| `NETJETS EUROPE` | `https://www.netjets.com/en-gb/` |
| `EJM EUROPE` | `http://www.ejme.com/` |
| `QS PARTNERS` | `http://www.qspartners.com/` |
| `QS SECURITY` | `https://www.qssecurity.com/` |
| `© 2026 NetJets IP, LLC` | plain text (homepage; sitemap may show © 2024 — use homepage) |
| `LEGAL AND PRIVACY` | `/s/legal-and-privacy-policies` |
| `CA PRIVACY` | `/s/ca-privacy` |
| `SITEMAP` | `/s/sitemap` |
| `DO NOT SELL OR SHARE MY PERSONAL INFORMATION` | OneTrust button — not a page URL |
| `NetJets Inc. is a Berkshire Hathaway company.` | “Berkshire Hathaway” → `https://www.berkshirehathaway.com/` |
| `Executive Jet Management®, Inc. operates charter air transportation services under 14 CFR Parts 135 and 298.` | plain text |

**Rebuild-only append:** `built by dglxss`

---

## 4. Do not invent

- No Owner Portal / login CTA on public homepage
- No hero CTA
- No fleet card blurbs
- No destination-page body copy until separately extracted (URLs in REPORT §1)
- No marketing synonyms or “luxury fluff” rewrites
- Schema phone `+1-877-356-5387` exists in ld+json — **footer phone for UI is `+1.800.451.2822`**; do not swap without lead OK

---

## 5. CTA checklist (homepage)

| Label | Href |
|---|---|
| Simplify jet ownership > | `http://www.executivejetmanagement.com/s/aircraft-management` |
| Travel in luxury > | `http://www.executivejetmanagement.com/s/private-jet-charter-flights` |
| Read the latest edition > | `https://www.netjets.com/en-us/safety-insights` |
| Explore Our Network | `/s/aircraft-management-services` |
| Try it now > | `https://www.executivejetmanagement.com/s/private-jet-charter-cost` |
| This is EJM > | `https://www.executivejetmanagement.com/s/executive-leadership` |
| Explore opportunities > | `https://www.executivejetmanagement.com/s/careers` |
| Contact Us | `/s/contact-us` |

— Wren (copy) · reconciled to ejm-recon REPORT.md
