# Product Requirement Document (PRD)
## Project Name: Promptveil
### Team: Ankit Kumar (Lead, Backend & Extension), Nishay (Frontend)
### Tooling & Execution Environment: Antigravity AI Engine
### Project Duration: 3 Months (~12 Weeks)

---

### 1. WHAT TO BUILD & CORE MISSION
* **Project Name**: **Promptveil**
* **Core Value Proposition**: A production-grade, dual-layer AI cybersecurity ecosystem providing pre-execution defense against **Direct Prompt Injection** and **Indirect Prompt Injection (IPI)** across AI web agents, ChatGPT, and Gmail workflows.
* **Delivery Formats**:
  1. **Promptveil Web Platform**: Sleek, single-container scanner (Text + PDF/Document attachment), real-time scan progress, threat classification badges, and historical log analytics.
  2. **Promptveil In-Situ Browser Extension**: A "Grammarly-style" inline protector that hovers directly over ChatGPT prompt boxes, Gmail message views, and agent DOM access points to intercept and neutralize prompt injection attempts before the LLM processes them.

---

### 2. TARGET USERS
* **Everyday AI Users**: Interacting with ChatGPT, Gemini, and web agents who want to prevent accidental prompt hijacking from emails or web search results.
* **Cybersecurity Engineers & SecOps**: Auditing automated LLM pipelines and tracking prompt injection telemetry.
* **AI Developers**: Testing prompt safety and running stress-tests on test payloads.

---

### 3. TECH STACK SPECIFICATION
* **Frontend**: React.js, Tailwind CSS (Pure Flat UI aesthetic, zero heavy drop-shadows), Lucide Icons, Axios.
* **Backend**: Node.js, Express.js, Multer (file uploads), JWT, Cors.
* **Database**: MongoDB with Mongoose ODM (Threat logs, custom signatures, sync telemetry).
* **Extension Platform**: Chrome Extension Manifest V3.
* **Detection Engine**: Regex Heuristics + ONNX Runtime Web / Transformers.js (`all-MiniLM-L6-v2`).