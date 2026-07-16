# Samhith Portfolio — Project Memory

> Last updated: July 16, 2026  
> Branch: `ashwanth`  
> Dev server: `http://localhost:3000`

---

## 🏗 Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

All sections are rendered on `src/app/page.tsx` as a single-page scrolling layout. No routing beyond the root page.

### Section-to-File Mapping

| Section (id) | File | Original File |
|---|---|---|
| `hero` | Hero.tsx | Hero.tsx |
| `about` | About.tsx | About.tsx |
| `mission` | TechLogos.tsx (repurposed) | TechLogos.tsx |
| `journey` | Education.tsx | Education.tsx |
| `next360` | Skills.tsx (repurposed) | Skills.tsx |
| `ventures` | Experience.tsx (repurposed) | Experience.tsx |
| `impact` | Projects.tsx (repurposed) | Projects.tsx |
| `achievements` | Achievements.tsx | Achievements.tsx |
| `vision2030` | Featured.tsx (repurposed) | Featured.tsx |
| `insights` | FAQ.tsx (repurposed) | FAQ.tsx |
| `contact` | Contact.tsx | Contact.tsx |

**Key rule:** NEVER create new section files. Always repurpose existing ones.

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Background | `#08140D` | Main page bg |
| Secondary BG | `#0C1C13` | Alternate sections |
| Cards | `rgba(18,26,21,0.72)` | Glass card backgrounds |
| Primary Text | `#FFFFFF` | Headings |
| Secondary Text | `#C6C6C6` | Body text |
| Muted | `#8A918E` | Subtle/tertiary text |
| Accent | `#D97B4D` | CTAs, highlights |
| Success Green | `#4E8F57` | India map dots, status badges |
| Borders | `rgba(255,255,255,0.08)` | Card/dividers |

### Typography

- Sans-serif system font (Inter/default)
- All headings: bold, tight tracking, generous spacing
- Body: light weight, muted color
- No flashy/custom fonts — clean startup aesthetic

---

## 🧠 Known Issues & Fixes

### Hydration Error (Fixed ✅)

**Root cause:** `Math.random()` used inside JSX in `AnimatedIndiaMap` component (Hero.tsx). Next.js server-renders the HTML first, then React hydrates on client. `Math.random()` produces different values on server vs client, causing React to throw hydration warnings and refuse to patch the mismatch.

**Fix:** Replaced all `Math.random()` calls with a deterministic LCG pseudo-random number generator:

```
function createRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 1) % 2147483647;
    return s / 2147483647;
  };
}
```

- Dots use seed `42`, particle positions use seed `123`
- All random-ish values (opacity, animation durations, positions) are pre-computed inside `useMemo` with this deterministic RNG
- Server and client always produce identical HTML

**Files affected:** `src/components/sections/Hero.tsx` (AnimatedIndiaMap component)

### Current Build Status

✅ Clean build — no TypeScript or compilation errors.

---

## 🖼 Hero Section — Round 2: Premium Portrait Redesign (July 16, 2026)

### ❌ Removed
- **Circular/blob green backlight** (`bg-[#4E8F57]/10 blur-[30px]`) — removed completely
- **Square border frame** (`border-2 border-[rgba(78,143,87,0.2)]`) around portrait
- **Decorative ring** (`inset-[-12px] rounded-2xl border`) around the image
- **Gradient overlay** (`bg-gradient-to-t from-[#08140D]/60`) over the portrait
- **Right-edge gradient fade** on the India map container
- **Small shadow div** beneath the portrait (replaced with larger ambient glow)

### ✅ Added / Changed
- **Portrait size increased ~87-100% from original** (from 160/180/220px → **300/360/440px**) — now large enough to completely cover the green circle glow behind it
- **Image mode** changed from `object-cover` → `object-contain` for transparent PNG rendering
- **Portrait positioned toward right edge** using `ml-auto -mr-10 md:-mr-16` — overflows column for a premium breakout effect
- **India Map repositioned** — now centered directly behind the portrait (was beside it)
- **India Map scaled up** — container increased from 380/460/540px to 400/500/620px
- **Green circle glow inside AnimatedIndiaMap** reduced from 350/400px → 200/240/260px and opacity reduced from `/8` → `/5` — kept small so the enlarged portrait covers it entirely
- **Single subtle ambient green glow** extending downward: `bg-[#4E8F57]/4 blur-[120px]` — barely perceptible, no visible circular shape
- **Soft ambient light behind portrait**: `bg-[#4E8F57]/5 blur-[100px]` and `drop-shadow(0 0 30px rgba(78,143,87,0.25))`
- **Column wrapper** `overflow-hidden` removed so portrait can visually overflow to the right (section level `overflow-hidden` still prevents page scroll)

### 🔒 Unchanged
- Grid layout: `lg:col-span-8` (text) / `lg:col-span-4` (portrait) — left text area fully preserved
- All left-side text, buttons, CTA links, typography
- Statistics bar with animated counters
- Leaf decorations, scroll indicator, mouse glow
- `AnimatedIndiaMap` SVG component (only its internal glow size changed)

---

## 📁 Git Ignore

- Added `server.log` to `.gitignore` under a `# logs` section

---

## 🧪 Dev Server

- **URL:** `http://localhost:3000`
- Hot reload is active — changes reflect immediately on refresh
- If port conflicts, Next.js auto-increments to next available

---

## 🔄 Git Workflow

- Remote: `https://github.com/shivaganesh9515/Samhith.git`
- Main branch: `main`
- Working branch: `ashwanth`
- Always pull `main` before starting work, then merge/rebase into `ashwanth`

### Recent Commits (July 16, 2026)

- `be9430c` — Update hero section with new profile image (sangam-profile.png) and refactor portrait styling
- Both `ashwanth` and `main` branches pushed to remote
- PR link: https://github.com/shivaganesh9515/Samhith/compare/main...ashwanth?expand=1

---

## 📝 Future Enhancement Notes

- Hero India map could be extracted as a standalone shared component if reused elsewhere
- Contact form submission (currently just UI)
- Blog/insights content could be dynamic from MDX or CMS
- Vision 2030 roadmap dates are illustrative — update with actual milestones
