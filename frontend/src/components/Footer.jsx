import React from 'react';
import { PromptveilLogo } from './Logo';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <PromptveilLogo className="w-7 h-7" />
              <span className="font-bold text-base text-slate-900 dark:text-white tracking-tight">
                Promptveil
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Production-grade pre-execution AI cybersecurity platform protecting LLM agents against direct and indirect prompt injection attacks.
            </p>
          </div>

          {/* Defense Layers */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Tri-Layer Defense
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Layer 1: Heuristic &amp; Regex Filter (&lt;5ms)
              </li>
              <li className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Layer 2: Semantic ML Embeddings
              </li>
              <li className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Layer 3: Context Drift Analysis
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Platform Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/scanner" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Unified Playground Scanner
                </Link>
              </li>
              <li>
                <Link to="/extension" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  In-Situ Chrome Extension
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Research Papers &amp; Benchmarks
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Promptveil AI Cybersecurity Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
