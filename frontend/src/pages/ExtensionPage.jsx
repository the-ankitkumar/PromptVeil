import React, { useState } from 'react';
import { 
  Puzzle, 
  ShieldCheck, 
  Mail, 
  MessageSquare, 
  Download, 
  Check, 
  Package, 
  Settings, 
  Upload,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function ExtensionPage() {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    
    // Non-downloading preview feedback state
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }, 600);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header & Download CTA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="space-y-2 max-w-2xl">

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            In-Situ Browser Extension Hub
          </h1>

        </div>

        {/* 1-Click Download Button */}
        <div>
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2.5 text-sm shadow-none shrink-0"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Downloaded (.zip)!</span>
              </>
            ) : downloading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Packaging Extension ZIP...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Chrome Extension (.zip)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Extension Feature Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Feature 1: ChatGPT DOM Interceptor */}
        <div className="flat-card p-6 md:p-8 space-y-5 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                ChatGPT DOM Interceptor
              </h3>

            </div>
          </div>


        </div>

        {/* Feature 2: Gmail Email Body Hook */}
        <div className="flat-card p-6 md:p-8 space-y-5 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Gmail Email Body Hook
              </h3>

            </div>
          </div>


        </div>

      </div>

      {/* 3-Step Installation Walkthrough */}
      <div className="flat-card p-8 md:p-10 space-y-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div className="border-b border-slate-200 dark:border-slate-700 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              3-Step Installation Guide
            </h2>

          </div>
          <button
            onClick={handleDownload}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5"
          >
            <span>Download ZIP</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center">
              1
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Package className="w-4 h-4 text-blue-600" />
              Unzip Package
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Download and extract the <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded text-blue-600">promptveil-extension.zip</code> file onto your computer.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center">
              2
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Settings className="w-4 h-4 text-blue-600" />
              Open Extensions
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Navigate to <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-blue-600">chrome://extensions</code> in Chrome and toggle <strong>Developer mode</strong> ON in the top right.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center">
              3
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Upload className="w-4 h-4 text-blue-600" />
              Load Unpacked
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Click <strong>"Load unpacked"</strong> and select the extracted extension folder. Promptveil will now intercept prompts in real time.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
