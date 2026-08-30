# Implementation Phases & 3-Month Roadmap (`phases.doc.md`)
## Project Name: Promptveil
### Total Duration: 3 Months (12 Weeks)

---

### 🗓️ MONTH 1: FRONTEND & FLAT UI ARCHITECTURE (React.js + Tailwind CSS)

#### 🔹 Week 1: Environment Setup, Design System & Layout Scaffold
* Setup Vite + React 19 project structure and Git repository.
* Configure Tailwind CSS with pure Flat Design tokens (slate canvas, solid white cards, 1px crisp borders, brand blue, emerald/amber/red status colors).
* Build responsive Top Navbar (`Home`, `Scanner`, `Extension`, `Docs`, `Sign In`). *Note: Threat Logs is hidden during Month 1 pure frontend phase.*
* Design base layout shells for all pages.

#### 🔹 Week 2: Home Page & Educational/Research Showcase
* Build clean, minimalist Hero section with interactive test drive widget.
* Develop Interactive Architecture visualizer explaining Direct vs Indirect Prompt Injection.
* Build Feature Showcases: In-situ Extension protection, Tri-layer hybrid scoring, and Unified Playground Scanner.
* Review & polish UI responsiveness across desktop and tablet views.

#### 🔹 Week 3: Unified Scanner (Playground) Component
* Build the single-card Unified Scanner container:
  - Multi-line textarea for prompt typing.
  - Bottom toolbar: File attachment paperclip icon (`.pdf`, `.txt`, `.docx`), character/token counter, and solid blue "Scan & Defend" button.
* Create animated scan progress bar (0% to 100%) showing simulated hybrid detection stages.
* Build file drag-and-drop state indicators.

#### 🔹 Week 4: Results Dashboard, Threat Cards & Frontend Mock State
* Build dynamic Result Card below the scanner:
  - Side-by-side Risk Score Gauge (0–100) & Threat Classification Tag.
  - 3-Layer signal breakdown card (Layer 1 Heuristic, Layer 2 Semantic ML, Layer 3 Context Drift).
  - Sanitized prompt preview box with 1-click copy action.
* Build mock threat logs table and documentation view. Month 1 review with Ankit.

---

### 🗓️ MONTH 2: BACKEND, DATABASE & HYBRID DETECTION ENGINE (Node.js + Express + MongoDB)

#### 🔹 Week 5: Server Architecture & Database Setup
* Initialize Node.js & Express server with MVC pattern (`routes/`, `controllers/`, `models/`, `middlewares/`).
* Configure MongoDB connection via Mongoose with retry logic.
* Create Mongoose Schemas:
  - `User.js` (Auth, API keys, role permissions).
  - `ThreatLog.js` (Timestamp, source [Web/Extension], raw text, risk score, classification, layer breakdown).
  - `CustomRule.js` (Custom regex patterns, domain whitelists/blacklists).

#### 🔹 Week 6: Authentication, User Management & File Upload Pipeline
* Build `/api/auth` endpoints (Register, Login, JWT verification, Bcrypt password hashing).
* Implement protected route middleware for dashboard access.
* Configure Multer middleware for file uploads (`.pdf`, `.docx`, `.txt`).
* Integrate `pdf-parse` / `pdfjs-dist` to extract raw text streams from uploaded documents.

#### 🔹 Week 7: Layer 1 (Heuristics) & Layer 2 (Semantic ML) Implementation
* **Layer 1 Heuristic Engine**: Fast regex matcher for direct jailbreaks (`Ignore previous instructions`, `DAN`, role overrides, invisible zero-width unicode, delimiters).
* **Layer 2 Semantic ML Engine**: Setup embedding pipeline (Transformers.js / ONNX quantized `all-MiniLM-L6-v2`) to measure cosine similarity against known IPI taxonomies (BIPIA benchmark).
* Implement preliminary scoring algorithm.

#### 🔹 Week 8: Layer 3 (Context Discrepancy), Aggregator & API Integration
* **Layer 3 Contextual Engine**: Build intent vs untrusted content drift calculator (checks if external content contradicts user intent).
* Implement **Weighted Hybrid Aggregator** formula to produce final 0–100 Risk Score and Attack Classification.
* Build unified endpoints: `POST /api/scan/text` and `POST /api/scan/file`.
* Connect React frontend to Express backend via Axios. Month 2 review with Ankit.

---

### 🗓️ MONTH 3: BROWSER EXTENSION, INTEGRATION, TESTING & DEPLOYMENT

#### 🔹 Week 9: Manifest V3 Chrome Extension Foundation & In-Situ Hooks
* Setup Chrome Extension Manifest V3 structure (`background.js`, `content_scripts`, `popup`).
* Develop **ChatGPT In-Situ Hook**: Injects floating GuardAI circular shield icon inside the ChatGPT chat box corner.
* Develop **Gmail In-Situ Hook**: Intercepts email body text before AI agent reading/summarization.

#### 🔹 Week 10: In-Browser Detection & Real-Time Sync
* Port lightweight Layer 1 & 2 heuristics into the extension content script for <15ms offline client evaluation.
* Build inline alert tooltip (Green = Safe, Amber = Warning, Red = Injection Blocked) with "Sanitize & Proceed" / "Block" buttons.
* Implement background service worker telemetry to push all scan events asynchronously to Express/MongoDB.

#### 🔹 Week 11: Security Benchmarking, Stress Testing & Edge Cases
* Test detection accuracy against academic benchmark datasets (BIPIA, AgentDojo, StruQ test cases).
* Test large file parsing performance and memory leak checks in headless Chromium.
* Implement error boundaries, rate limiting, and fallback strategies (graceful downgrade if WebAssembly is unsupported).

#### 🔹 Week 12: Production Packaging, Documentation & Final Presentation
* Build production bundles for React frontend (Vercel) and Express/MongoDB backend (Render/Railway/Atlas).
* Package Chrome Extension ZIP for developer mode and store submission.
* Finalize comprehensive research docs, user guide, and presentation demo walk-through. Final sign-off with Ankit.