# Samhith Portfolio — Project Memory

> Last updated: July 15, 2026  
> Branch: `ashwanth`  
> Dev server: `http://localhost:3002`

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

## 🧪 Dev Server

- **URL:** `http://localhost:3002`
- Hot reload is active — changes reflect immediately on refresh
- If port conflicts, Next.js auto-increments to next available

---

## 🔄 Git Workflow

- Remote: `https://github.com/shivaganesh9515/Samhith.git`
- Main branch: `main`
- Working branch: `ashwanth`
- Always pull `main` before starting work, then merge/rebase into `ashwanth`

---

## 📝 Future Enhancement Notes

- Hero India map could be extracted as a standalone shared component if reused elsewhere
- Contact form submission (currently just UI)
- Blog/insights content could be dynamic from MDX or CMS
- Vision 2030 roadmap dates are illustrative — update with actual milestones
