# NetJets homepage — COPY DECK (exact)

Source of truth: https://www.netjets.com/en-us/  
Rebuild note: keep Motionsites dark-liquid-glass **hero chrome**; after hero, transplant these strings in scroll order.  
Attribution (rebuild only, not on original): `built by dglxss` — no Grok / xAI / Motionsites tags.  
Rule: verbatim only. Do not invent, paraphrase, or “improve.”

Verified against live en-us crawl (DOM). Mobile line breaks for card 5 follow studio/Doug scroll order.

---

## 1) Header — logo wordmark

```
NetJets
```

Font note (design, not a string): legacy italic sans wordmark; distinctive capital **J**. Treat as logo, not body type.

---

## 2) CONTACT US bar

```
CONTACT US
```

(Utility / header control. On live this opens the Request Information / Call Us panel — JS, not a plain href.)

---

## 3) Hero carousel slides (exact)

Slide 1

```
MIDSIZE, MAXIMIZED
OWN THE NEW CESSNA CITATION ASCEND
```

(Live link target: `/en-us/age-of-ascend`)

Slide 2

```
LATEST EDITION OF NETJETS SAFETY INSIGHTS NOW AVAILABLE
ACCESS THE NEWEST ISSUE OF OUR SAFETY PUBLICATION
```

(Live link target: `/en-us/safety-insights`)

Slide 3

```
WHICH PROGRAM IS BEST FOR YOU?
COMPARE OUR SHARE AND CARD TO FIND YOUR IDEAL SOLUTION
```

(Live link target: `/en-us/jet-card-cost-comparison`)

Carousel chrome (if needed): counter pattern `1 / 3`, `2 / 3`, `3 / 3`.

**Rebuild chassis:** Motionsites dark-liquid-glass hero may stay; if a single-slide hero is required, prefer slide 3 verbatim — do not blend slides.

---

## 4) Pinnacle block

Headings (both appear on live):

```
THE PINNACLE OF PRIVATE TRAVEL
FROM THE PIONEER OF FRACTIONAL AIRCRAFT OWNERSHIP
```

Body (exact — em dash after NetJets, NetJets® registered mark):

```
Expect the world with NetJets—the leading fractional aircraft company offering superior solutions favored by the most discerning travelers. Our vast, versatile private jet fleet, operational excellence, and proven business model ensure seamlessness and stability that is unmatched. Only NetJets®, a proud Berkshire Hathaway company, empowers luxury travel on your terms, marked by our resolute commitment to the highest safety standards, personalized service, and global access.
```

---

## 5) Card — Cost transparency

Headline (mobile line breaks as briefed):

```
COST TRANSPARENCY,
INVESTMENT,
CONFIDENCE
```

(Single-line DOM alternate, same words: `COST TRANSPARENCY, INVESTMENT CONFIDENCE`)

Blurb:

```
Explore premium programs with predictable pricing
```

(Live link: `/en-us/private-jet-cost-pricing`)

---

## 6) Card — New aircraft

```
80+ NEW AIRCRAFT ARRIVING IN 2026
Tour the growing, global NetJets fleet
```

(Live link: `/en-us/compare-luxury-private-jets`)

---

## 7) Unsurpassable luxury

```
UNSURPASSABLE LUXURY
Flying with NetJets means seamless travel and personalized experiences.
```

---

## 8) Card — Corporate travel

Headline (mobile line breaks as briefed):

```
CORPORATE TRAVEL,
PERFECTED
```

(Single-line DOM alternate: `CORPORATE TRAVEL, PERFECTED`)

Blurb:

```
Enhance your competitive edge
```

(Live link: `/en-us/business-jet-travel`)

---

## 9) Card — NetJets vs. others

```
NETJETS VS. OTHERS
See why NetJets is the only choice in private travel
```

(Live link: `/en-us/private-aviation-services`)

---

## 10) News CTA

```
See all NetJets News
```

(Live link: `/en-us/news`)

---

## 11) Explore band

Heading (DOM title case; CSS often uppercases on live):

```
Explore the Possibilities
```

(Rendered/CSS-upper alternate seen as: `EXPLORE THE POSSIBILITIES`)

Body:

```
We have the right solution to fit your unique travel needs.
```

CTAs:

```
REQUEST INFORMATION
CALL US
```

---

## 12) Contact / call panel + footer facts

Panel labels:

```
CONTACT US
CALL US
```

Phone (display as on live):

```
+1.877.356.5823
```

(tel href seen as `tel:+1.877.356.5823` or `tel:+18773565823` — display string above is canonical.)

Consultation line:

```
Call today for a personal consultation with one of our private aviation experts.
```

Request form (if transplanting the panel):

```
Request Information
Submit
By submitting this form, you consent to be contacted by NetJets and its affiliates and to have your personal data processed, stored, and used in accordance with the terms set out in our Privacy Policy.
```

Success state:

```
Thank You
We appreciate your interest in NetJets. A member of our team will be in touch very shortly to discuss your needs.
```

Footer address (exact):

```
4111 Bridgeway Avenue, Columbus, Ohio 43219
```

Other NetJets Companies:

```
EXECUTIVE JET MANAGEMENT
QS PARTNERS
QS SECURITY
```

(Live URLs: https://www.executivejetmanagement.com/s/ · https://www.qspartners.com · https://qssecurity.com/)

Copyright (live):

```
© 2026 NetJets IP, LLC
```

(Year is current calendar year on live; entity must stay `NetJets IP, LLC`.)

---

## Rebuild-only attribution (not on original site)

Append in footer credit area only:

```
built by dglxss
```

Do not add Grok, xAI, or Motionsites tags.

---

## Scroll order (post–liquid-glass hero)

1. Header wordmark + CONTACT US  
2. (Optional) hero carousel strings if not replaced by Motionsites hero  
3. §4 Pinnacle  
4. §5 Cost transparency card  
5. §6 80+ aircraft card  
6. §7 Unsurpassable luxury  
7. §8 Corporate travel card  
8. §9 NetJets vs. others card  
9. §10 See all NetJets News  
10. §11 Explore band + REQUEST INFORMATION / CALL US  
11. §12 Contact panel + footer address / Other Companies / copyright  
12. `built by dglxss`

---

## Out of scope for this deck

Mega-menu labels (`UNMATCHED EXPERIENCE`, `OUR PROGRAMS & AIRCRAFT`, etc.), cookie banner, social aria labels — available on request; not in the numbered brief.

— Wren · copy deck · zero invention
