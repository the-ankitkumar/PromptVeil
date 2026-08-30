# Visual Design System & UI/UX Guidelines (`design.md`)
## Flat Design System: Promptveil Flat UI

---

### 1. UI/UX PHILOSOPHY: CLEAN, SIMPLE & ATTRACTIVE
* **Pure Flat Design**: Clean 2D surfaces, crisp 1px borders, zero heavy shadows, balanced whitespace.
* **Unified Single-Box Scanner**:
  - No separate tabs for file upload vs text typing.
  - Generous multi-line text input area.
  - Bottom toolbar within the card: File Attachment icon (`Paperclip`), Character count, and a prominent solid Blue "Scan & Defend" button.
  - Results appear smoothly below with a progress bar, followed by a side-by-side Score & Classification display.
* **Grammarly-Like Inline Widget**:
  - Small, sleek 24px circular shield icon attached to the bottom-right corner of ChatGPT/Gmail input boxes.
  - Subtly pulses green when safe, amber when checking, and red when an injection is detected.

---

### 2. COLOR PALETTE & THEME (Tailwind Tokens)
* **Canvas Background**:
  - Light Mode: `#F8FAFC` (`bg-slate-50`)
  - Dark Mode: `#0F172A` (`bg-slate-900`)
* **Card Surfaces**:
  - Light Mode: `#FFFFFF` (`bg-white`)
  - Dark Mode: `#1E293B` (`bg-slate-800`)
* **Borders**:
  - Light Mode: `#E2E8F0` (`border-slate-200`)
  - Dark Mode: `#334155` (`border-slate-700`)
* **Brand Primary**: `#2563EB` (`bg-blue-600` / `text-blue-600`)
* **Threat Status Accents**:
  - Safe: `#10B981` (`bg-emerald-500`, `text-emerald-700`, `bg-emerald-50`)
  - Suspicious / Warning: `#F59E0B` (`bg-amber-500`, `text-amber-700`, `bg-amber-50`)
  - Critical Injection Blocked: `#EF4444` (`bg-red-500`, `text-red-700`, `bg-red-50`)

---

### 3. FONTS & TYPOGRAPHY
* **Font Family**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif.
* **Code / Monospace**: JetBrains Mono, Fira Code, monospace.
* **Scale**:
  - Page Title: `24px / 1.3`, SemiBold (600)
  - Section Header: `18px / 1.4`, SemiBold (600)
  - Card Title: `14px / 1.4`, Medium (500)
  - Body Text: `13px / 1.5`, Regular (400)
  - Captions / Badges: `11px / 1.4`, Medium (500)