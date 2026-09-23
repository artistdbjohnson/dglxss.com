# Liquid-glass audit — Path A pitches

23 Sep 2026. Live URLs, built CSS, and local dial-back builds. Score is overuse: **1** means glass is absent or only quiet structural chrome, **10** means decorative glass is the look and swaps with a sibling.

Doug’s worry holds for the three recent clinic pitches. It does not hold for the whole portfolio.

## Shared recipe

LP CLINIC Cascais (22 Sep), Farmington Dental NY (21 Sep), and Boho Studios MedSpa (deployed within the last day) all ship a class named `.liquid-glass` taken from the Motionsites `equilibrium` seed:

- fill `rgba(255, 255, 255, 0.01)`
- `background-blend-mode: luminosity`
- `backdrop-filter: blur(4px)` on Boho and Farmington, `blur(6px)` on LP
- inset highlight `0 1px 1px rgba(255, 255, 255, 0.1)`
- a `::before` ring, `padding: 1.4px`, masked gradient from white ~0.45 down through transparent and back up

Boho and Farmington are the same rule. The only authored difference in the ring is the tint stop: Boho uses gold `#a89d6a` and teal `#52a192`; Farmington’s dark ring is plain white; LP adds a gold stop `#dc940d` and a panel variant (`blur(18px)`, charcoal at 82% opacity). Light mode on all three turns the same class into frosted white (`#ffffff75`–`#ffffff80`).

Hit counts on the homepage HTML:

| Site | `.liquid-glass` | of which panels |
| --- | ---: | ---: |
| Farmington Dental NY | 51 | mobile sheet only |
| LP CLINIC Cascais | 39 | 18 |
| Boho Studios MedSpa | 38 | 0 (tiles use the base class) |

That is decorative chrome doing the work of a surface: nav, locale/theme cluster, secondary buttons, service rows, review plates, treatment tiles, membership ribbon, philosophy rail.

## Scores

| Site | Score | Glass | Role | Same as the clinic seed? | Call |
| --- | ---: | --- | --- | --- | --- |
| Farmington Dental NY | 8 | blur 4px + white specular ring on 51 nodes, including a glass accordion inside a glass shell | Decorative. The nested services are the page. | Yes. Twin of Boho. | **DIAL BACK** |
| Boho Studios MedSpa | 8 | same 4px rule, gold/teal ring, on nav, rail, ribbon, and every treatment tile | Decorative mosaic | Yes. Twin of Farmington. | **DIAL BACK** |
| LP CLINIC Cascais | 7 | blur 6px ring on chrome; panels blur 18px at `rgba(28,26,25,.82)` | Nav over the photo is useful. Pillars, journey, contact, and the dock repeat the ring. | Same family, slightly more tailored. | **DIAL BACK** |
| Village Cascais | 7 | own system: `.glass` blur 22–36px, saturate 1.55–1.9, noise, animated sheen | Stats, pricing, media, nav | No. Heavier, and a different language. | Later pass. Not this recipe. |
| Novo Freire | 6 | `.nf-glass`, saturate 1.75, white gradient, specular `::before`, hover sheen. ~70 cards | Cards are the page | No. Light clinical glass, separate system. | Later pass. |
| TX DIEP Flap | 5 | inline frost: pills blur 8px at white .28; cards blur 20px at white .38, radius 4px; one sheet blur 50px | Pale paper panels | No. Not the dark glow ring. | **KEEP** for this pass |
| FaceLess | 3 | cream `#fcf9f2` glass, square corners, blur 28–64 on nav, player, product panels | Structural chrome. Splash is matte black. | No | **KEEP** |
| Visconde da Luz | 2 | no `backdrop-filter` in the built CSS | Garden / editorial | No | **KEEP** |

Visconde’s stylesheet contains a Tailwind `.blur` utility and `::backdrop` inside a browser-support query. Nothing on the page uses frosted panels.

FaceLess is a lot of glass code and a quiet page. The store reads as paper. The nav frost is doing a job (type over photography, player chrome). It is not the clinic pill.

Village and Novo Freire are glassy enough to feel tacky on their own. They are not why the three pitches look like one site. Their repos were not in the public list this token can see, so they were not restyled.

## What changed

Dial-back is on the two public pitches that share the seed and that this environment can build: **Farmington** (worst count, generic white ring) and **LP CLINIC** (the other September pitch on the same ring). Boho is the third twin. `artistdbjohnson/boho-studios-medspa` and the other likely names return 404, so there is no patch for it.

Matte treatment, both repos:

- `.liquid-glass` is `background: var(--bg-elev)` plus a 1px `var(--line)` border. No blur, no luminosity blend, no specular `::before`.
- On the hero, the same class is a solid dark plate (`rgba(7, 21, 32, 0.94)` Farmington, `rgba(21, 20, 20, 0.94)` LP) so white nav type still sits on the photograph.
- Sticky header is solid `var(--bg)` with a hairline, not `backdrop-blur-md`.
- Hero secondary action is a 1px white outline, not a glass pill.
- Farmington’s nested service body keeps the brand gradient frame and uses a solid fill.
- LP journey chip, before/after labels, international dock, and contact sheet use solid paper colors. Dock and contact copy follow `--ink` / `--muted` so light mode stays readable.

`npx next build` succeeds for both apps (Next.js 16.3.5).

Computed styles in headless Chrome:

| Surface | Live | Local matte |
| --- | --- | --- |
| Farmington nav on hero | `rgba(255,255,255,0.01)`, border 0, ring gradient on `::before` | `rgba(7,21,32,0.94)`, 1px white border, `::before` content `none` |
| Farmington service row | `rgba(255,255,255,0.01)` | `rgb(11, 44, 70)` — screenshot pixel on the row’s text side is exactly `[11, 44, 70]` |
| LP pillar card | `rgba(28,26,25,0.82)` | `rgb(28, 26, 25)` — screenshot pixel is exactly `[28, 26, 25]` |
| LP nav on hero | `rgba(255,255,255,0.01)` | `rgba(21,20,20,0.94)` |

Headless Chrome reports `backdrop-filter: none` even on the live pages, and it drops `position: fixed` headers out of full-page screenshots. The blur itself is not visible in those captures. The fill and the ring are. In-flow cards are the reliable picture.

## Patches (not yet on the product repos)

Push of `cursor/farmington-matte-chrome-d144` and `cursor/lp-clinic-matte-chrome-d144` was rejected:

`Permission to artistdbjohnson/<repo>.git denied to cursor[bot]` (HTTP 403).

The commits exist only in this environment. Apply them from a checkout that can push:

```bash
git apply docs/audits/patches/farmington-dental-ny-matte.patch
git apply docs/audits/patches/lp-clinic-cascais-matte.patch
```

Run each apply inside that pitch repo, on current `main`.

Portfolio case copy on dglxss.com still describes these three as liquid-glass. That matches the live deploys until the patches ship. Boho is unchanged on https://boho-studios-medspa.vercel.app/.

## Left alone on purpose

- Visconde da Luz, TX DIEP Flap, FaceLess. Different materials, or no glass.
- Village Cascais and Novo Freire. Real glass, different recipes, no repo access here.
- dglxss.com’s own `.liquid-glass` / `.liquid-glass-card` / `.liquid-glass-nav` (blur 16 / 32 / 22 and a brighter specular ring). That is the portfolio chrome, not a client pitch. It is the louder parent of the seed. This pass does not restyle it.
