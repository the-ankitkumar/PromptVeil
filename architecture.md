# Architecture Specification (`architecture.md`)
## Project Name: Promptveil

---

### 1. SYSTEM FLOW DIAGRAM
```
+------------------------------------------------------------------------------------+
|                                    INPUT SOURCES                                   |
|   [ Direct User Prompt ]  |  [ Attached File / PDF / Doc ]  |  [ Incoming Emails / DOM ]   |
+-----------------------------------------+------------------------------------------+
                                          |
                                          v
+------------------------------------------------------------------------------------+
|                         PRE-EXECUTION INTERCEPTION LAYER                           |
|   A. Promptveil Web App (React.js)             B. Promptveil In-Situ Extension Hook|
|      - Unified Text + File Box                    - In-situ Content Script         |
|      - Realtime % progress                        - Gmail / ChatGPT DOM Interceptor|
+-----------------------------------------+------------------------------------------+
                                          |
                                          v
+------------------------------------------------------------------------------------+
|                       TRI-LAYER HYBRID DEFENSE ENGINE                              |
|                                                                                    |
|  [ Layer 1: Heuristic Filter ]   --> Regex, Role Overrides, Delimiters (<5ms)       |
|  [ Layer 2: Semantic ML Embed ]  --> ONNX Browser Embeddings / Cosine Similarity     |
|  [ Layer 3: Context Discrepancy] --> User Intent vs Untrusted Content Drift Check   |
+-----------------------------------------+------------------------------------------+
                                          |
                                          v
+------------------------------------------------------------------------------------+
|                           SCORE AGGREGATION & DECISION                             |
|   - Risk Score (0–100) | Classification Tag | Explainable Reason Trace             |
+--------------------+-------------------------------------------+-------------------+
                     |                                           |
          [ Risk Score < Threshold ]                  [ Risk Score >= Threshold ]
                     |                                           |
                     v                                           v
        [ Clean Payload Passed to LLM ]              [ Inline Block / Red Warning ]
                     |                                           |
                     +---------------------+---------------------+
                                           |
                                           v (Async Telemetry Sync)
                             +---------------------------+
                             |   NODE.JS + EXPRESS API   |
                             +-------------+-------------+
                                           |
                                           v
                             +---------------------------+
                             |     MONGODB DATABASE      |
                             | (Threat Logs, Sync Events)|
                             +---------------------------+
```

---

### 2. REPOSITORY & FOLDER STRUCTURE
```text
promptveil/
├── backend/                      # Node.js + Express.js API (Built by Ankit)
│   ├── config/                   # MongoDB Mongoose Connection (db.js)
│   ├── controllers/              # scanController.js, authController.js, logController.js
│   ├── models/                   # ThreatLog.js, User.js, CustomRule.js
│   ├── routes/                   # /api/scan, /api/logs, /api/auth, /api/rules
│   ├── middlewares/              # uploadMiddleware.js (Multer), authMiddleware.js
│   ├── server.js                 # Express Application Entry
│   └── package.json
├── frontend/                     # React.js + Tailwind CSS (Collaborative / Nishay)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Home, Scanner, Extension, Logs, Docs, Login
│   │   │   ├── UnifiedScanner.jsx# Clean Textarea + File Attach + Live Progress
│   │   │   ├── ScoreCard.jsx     # Flat Risk Score & Threat Classification Cards
│   │   │   ├── SignalTrace.jsx   # Tri-Layer breakdown (Layer 1, 2, 3)
│   │   │   └── LogsTable.jsx     # Filterable MongoDB scan logs table
│   │   ├── pages/
│   │   │   ├── HomePage.jsx      # Minimalist Hero & Feature Showcases
│   │   │   ├── ScannerPage.jsx   # Dedicated Interactive Playground
│   │   │   ├── ExtensionPage.jsx # Extension download & active sync hub
│   │   │   ├── LogsPage.jsx      # Historical scan telemetry
│   │   │   └── DocsPage.jsx      # Research documentation & attack taxonomies
│   │   ├── services/             # Axios API calls to Express backend
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js        # Flat Design Color Tokens
│   └── package.json
├── extension/                    # Chrome Manifest V3 Extension (Built by Ankit)
│   ├── manifest.json
│   ├── background.js             # Background sync to Express/MongoDB
│   ├── content/
│   │   ├── chatgpt-hook.js       # Grammarly-like inline widget in ChatGPT
│   │   ├── gmail-hook.js         # Email parser before agent summarization
│   │   └── dom-extractor.js      # Hidden text & accessibility tree scraper
│   ├── popup/                    # Quick status popup
│   └── engine/                   # Local lightweight heuristics & ONNX matcher
└── README.md
```