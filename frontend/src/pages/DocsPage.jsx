import React, { useState } from 'react';

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('what-is-promptveil');

  const tocItems = [
    { id: 'what-is-promptveil', label: '1. What is Promptveil?' },
    { id: 'how-it-works', label: '2. How It Works' },
    { id: 'threat-model', label: '3. Threat Model & Taxonomy' },
    { id: 'defense-engine', label: '4. 3-Layer Hybrid Defense' },
    { id: 'extension-hub', label: '5. In-Situ Extension Hub' },
    { id: 'research-benchmarks', label: '6. Academic Benchmarks' },
    { id: 'api-specs', label: '7. API & Telemetry Specs' },
    { id: 'tech-stack', label: '8. Tech Stack & Requirements' }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

      {/* Top Banner Header */}
      <div className="flat-card p-6 md:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-3">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Promptveil Documentation
        </h1>

      </div>

      {/* Main Grid: Left Sidebar + Right Content Column */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

        {/* LEFT SIDEBAR: CONTENTS NAV (STICKY TABLE OF CONTENTS) */}
        <aside className="lg:col-span-1 flat-card p-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 sticky top-20 z-10">
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-2 border-b border-slate-100 dark:border-slate-700 pb-2">
              CONTENTS
            </h3>
            <nav className="space-y-1">
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between ${activeSection === item.id
                    ? 'bg-blue-600 text-white font-bold shadow-none'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* MAIN DOCUMENTATION CONTENT (RIGHT 3 COLUMNS) */}
        <main className="lg:col-span-3 space-y-8 min-w-0">

          {/* SECTION 1: WHAT IS PROMPTVEIL? */}
          <section id="what-is-promptveil" className="flat-card p-6 md:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-4">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                1. What is Promptveil?
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              <p>
                <strong>Promptveil</strong> is a real-time, client-side pre-execution security layer designed to protect Large Language Models (LLMs), AI web agents, and enterprise workflows against <strong>Direct Jailbreaks</strong> and <strong>Indirect Prompt Injection (IPI)</strong> attacks.
              </p>
              <p>
                Traditional LLM security solutions evaluate prompts server-side <em>after</em> untrusted payloads enter the model's context window. Promptveil shifts defense to the browser edge—intercepting text inputs, web DOM elements, emails, and attached documents <strong>before LLM dispatch</strong>.
              </p>
              <p>
                The system operates as a dual-format solution: an interactive web scanner for manual security testing and a Grammarly-style Chrome Manifest V3 extension for in-situ protection across ChatGPT and Gmail.
              </p>
            </div>
          </section>

          {/* SECTION 2: HOW IT WORKS */}
          <section id="how-it-works" className="flat-card p-6 md:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                2. How It Works
              </h2>
            </div>

            <div className="space-y-4">

              {/* Step 1 */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    Input Capture &amp; Intake
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-10">
                  Untrusted text is captured directly at the browser edge—via ChatGPT prompt textareas, Gmail message DOM hooks, uploaded files (.pdf, .docx, .txt), or raw text input boxes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    Tri-Layer Security Evaluation
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-10">
                  The payload is evaluated in parallel by Layer 1 Heuristics (&lt;5ms regex signature match), Layer 2 Semantic ML Embeddings (ONNX cosine similarity model), and Layer 3 Contextual Intent Drift Verification.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    Safe Execution or Neutralization
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-10">
                  If clean, the prompt dispatches normally. If a threat is detected, malicious instruction spans are stripped, an alert warning is triggered, and a sanitized payload is generated for safe execution.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 3: THREAT MODEL & TAXONOMY */}
          <section id="threat-model" className="flat-card p-6 md:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                3. Threat Model &amp; Taxonomy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Direct Attack */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3">

                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  User-Typed Jailbreak Exploits
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  A user directly inputs an adversarial prompt into ChatGPT or an AI chat interface to bypass safety rules (e.g. role overrides like "DAN", structural delimiter manipulation, or zero-width unicode character evasion).
                </p>
              </div>

              {/* Indirect Attack */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3">

                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Hidden Data-Source Hijacking
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  An attacker hides secret commands inside third-party files, emails, or web pages (via zero-font CSS or hidden HTML attributes). When an AI agent processes the file, it inadvertently executes the attacker's hidden command.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 4: 3-LAYER DEFENSE ENGINE */}
          <section id="defense-engine" className="flat-card p-6 md:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                4. 3-Layer Hybrid Defense Engine
              </h2>
            </div>

            <div className="space-y-4">

              {/* Layer 1 */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Layer 1: Deterministic Heuristic Filter (&lt;5ms)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  High-speed regex signature scanning. Detects known jailbreak prefixes, role impersonations (<code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">System:</code>, <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">Admin:</code>), structural delimiter injection, and zero-width unicode evasion characters.
                </p>
              </div>

              {/* Layer 2 */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Layer 2: ML &amp; Semantic Vector Similarity
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Calculates cosine similarity between incoming prompt spans and an indexed attack taxonomy database using in-browser ONNX embedding models (<code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">all-MiniLM-L6-v2</code>).
                </p>
              </div>

              {/* Layer 3 */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Layer 3: Contextual Intent Drift Scorer
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Compares the user's primary high-level objective against external text commands. Triggers a high discrepancy risk score if an external email or document attempts to divert the AI from the user's core task.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 5: IN-SITU EXTENSION HUB */}
          <section id="extension-hub" className="flat-card p-6 md:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                5. In-Situ Browser Extension Hub
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  ChatGPT DOM Interceptor
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Floats a circular shield badge in the bottom-right corner of ChatGPT prompt textareas. Shows instant Green/Red pre-send status and blocks jailbreak dispatches locally.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Gmail Email Body Hook
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Scans unread incoming emails and attached documents before autonomous AI web agents summarize inbox messages, preventing inbox hijacking exploits.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 6: ACADEMIC BENCHMARKS */}
          <section id="research-benchmarks" className="flat-card p-6 md:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                6. Academic Benchmarks &amp; Research
              </h2>
            </div>

            <div className="space-y-4">

              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">KDD / arXiv:2312.14197</span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  BIPIA: A Benchmark for Indirect Prompt Injection Attacks in LLMs
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Comprehensive evaluation framework proving that capable LLM web agents are highly vulnerable to indirect prompt injection via retrieved web search and email content.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">NeurIPS / arXiv:2406.13352</span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  AgentDojo: Dynamic Security Benchmarking for Web Agents
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Stress-tests multi-modal web agents against goal hijacking, unauthorized API execution, and untrusted data exfiltration.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 7: API SPECS */}
          <section id="api-specs" className="flat-card p-6 md:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                7. API &amp; Telemetry Specifications
              </h2>
            </div>

            <div className="space-y-4">

              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3 font-mono">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-600 dark:text-blue-400">POST /api/scan/text</span>
                  <span className="text-slate-400">Content-Type: application/json</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Scans raw prompt string or payload snippet. Returns risk score (0-100), threat classification, layer triggers, and sanitized prompt string.
                </p>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] text-slate-800 dark:text-slate-200">
                  {`{ "score": 92, "status": "THREAT BLOCKED", "classification": "INDIRECT_INJECTION", "layers": { "layer1": true, "layer2": true, "layer3": true } }`}
                </div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3 font-mono">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-600 dark:text-blue-400">POST /api/scan/file</span>
                  <span className="text-slate-400">Multipart Form Data (.pdf, .docx, .txt)</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Accepts multipart document file upload, parses text content, and evaluates text against indirect prompt injection vector database.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 8: TECH STACK */}
          <section id="tech-stack" className="flat-card p-6 md:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                8. Tech Stack &amp; Requirements
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px]">FRAMEWORK</span>
                <span className="font-bold text-slate-900 dark:text-white">React + Vite</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px]">STYLING</span>
                <span className="font-bold text-slate-900 dark:text-white">Tailwind CSS</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px]">ML RUNTIME</span>
                <span className="font-bold text-slate-900 dark:text-white">ONNX Web WASM</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px]">EXTENSION</span>
                <span className="font-bold text-slate-900 dark:text-white">Manifest V3</span>
              </div>
            </div>
          </section>

        </main>

      </div>
    </div>
  );
}
