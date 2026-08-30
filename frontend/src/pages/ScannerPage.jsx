import React, { useState } from 'react';
import {
  Terminal,
  Paperclip,
  ShieldCheck,
  Cpu,
  Zap,
  FileText,
  AlertTriangle,
  Check,
  Copy
} from 'lucide-react';

export default function ScannerPage() {
  const [inputText, setInputText] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);

  const charCount = inputText.length;
  const tokenCount = Math.ceil(charCount / 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Prompt &amp; Document Pre-Execution Scanner
          </h1>

        </div>
      </div>

      {/* UNIFIED SCANNER + RESULTS (Side-by-Side Layout) */}
      <div className="flat-card p-6 md:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

          {/* LEFT: Scanner Input (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="font-bold text-base text-slate-900 dark:text-white">
                Prompt &amp; Payload Scanner Box
              </h2>
            </div>

            <textarea
              rows={6}
              placeholder="Type or paste prompt text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-sm font-mono text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none transition-colors"
            ></textarea>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <Paperclip className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Attach File (PDF, TXT, DOC)</span>
                  <input type="file" accept=".pdf,.txt,.doc,.docx" onChange={(e) => e.target.files[0] && setAttachedFile(e.target.files[0].name)} className="hidden" />
                </label>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {charCount} chars / ~{tokenCount} tokens
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all flex items-center gap-2 shadow-none">
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Scan &amp; Defend Payload</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Results Panel (2 cols) */}
          <div className="lg:col-span-2 space-y-5 lg:border-l lg:border-slate-200 dark:lg:border-slate-700 lg:pl-8">

            <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-extrabold text-xl border bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800">
                  0
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono border bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800">
                    SYSTEM READY
                  </span>
                  <span className="text-xs font-mono text-slate-500 mt-1 block">
                    Risk Score: 0 / 100
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded border border-slate-200 dark:border-slate-600">
                [CLEAN / STANDBY]
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs">
                <div className="font-bold font-mono text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Layer 1: Pattern Rule Check</span>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs">
                <div className="font-bold font-mono text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Layer 2: Semantic Vector Check</span>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs">
                <div className="font-bold font-mono text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Layer 3: Intent Drift Analysis</span>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
