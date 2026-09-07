import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Terminal, Globe, Rocket, HelpCircle } from 'lucide-react';

interface NetlifyDeployGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NetlifyDeployGuide: React.FC<NetlifyDeployGuideProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 via-[#0A0C10] to-black text-[#F3F4F6] rounded-2xl shadow-2xl border border-white/10 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-white/10 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
            <Rocket className="w-4 h-4 text-amber-500" />
            <span>Netlify Deployment Guide</span>
          </div>
          <h3 className="text-2xl font-bold font-['Space_Grotesk',sans-serif]">
            Deploy KJS Technologies to Netlify
          </h3>
          <p className="text-slate-400 text-xs mt-1">
            This frontend is completely static and pre-configured for instant zero-config Netlify hosting.
          </p>
        </div>

        {/* Guide Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-sm text-slate-300">
          
          {/* Method 1: Instant Drag & Drop */}
          <div className="bg-amber-500/5 p-5 rounded-2xl border border-amber-500/20 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <Globe className="w-5 h-5 text-amber-500" />
              <span>Method 1: Drag & Drop (Fastest, Under 1 Minute)</span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300">
              <li>
                In your terminal, build the production static files:
                <div className="mt-1.5 flex items-center justify-between bg-black/80 border border-white/10 text-slate-100 px-3.5 py-2.5 rounded-xl font-mono text-xs">
                  <span>npm run build</span>
                  <button
                    onClick={() => copyToClipboard('npm run build', 'cmd')}
                    className="text-slate-400 hover:text-amber-400 transition-colors ml-2 cursor-pointer"
                  >
                    {copied === 'cmd' ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </li>
              <li className="pt-1">
                Open <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline font-semibold inline-flex items-center gap-1">app.netlify.com/drop <ExternalLink className="w-3 h-3" /></a> in your browser.
              </li>
              <li>
                Drag and drop the generated <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-amber-300">dist</code> folder into the Netlify Drop circle.
              </li>
              <li>
                Your site is instantly live at <code className="text-amber-400 font-semibold">https://your-site-name.netlify.app</code>!
              </li>
            </ol>
          </div>

          {/* Method 2: Git Repository on Netlify */}
          <div className="bg-black/40 p-5 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Terminal className="w-5 h-5 text-amber-400" />
              <span>Method 2: Automatic Git Deployment (Continuous Deploy)</span>
            </div>
            <div className="text-xs space-y-2 text-slate-300">
              <p>When connecting your GitHub repo to Netlify, use these exact settings:</p>
              <div className="grid grid-cols-2 gap-2 bg-black/80 p-3 rounded-xl border border-white/10 font-mono text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">BUILD COMMAND</span>
                  <span className="text-amber-400 font-bold">npm run build</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">PUBLISH DIRECTORY</span>
                  <span className="text-amber-400 font-bold">dist</span>
                </div>
              </div>
              <p className="text-amber-400/90 font-semibold pt-1 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" />
                <span><code className="bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 text-amber-300">public/_redirects</code> has already been created to ensure clean routing on Netlify!</span>
              </p>
            </div>
          </div>

          {/* Netlify Configuration File */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300">
              <span>Optional: netlify.toml Configuration</span>
              <button
                onClick={() => copyToClipboard(`[build]\n  command = "npm run build"\n  publish = "dist"\n\n[[redirects]]\n  from = "/*"\n  to = "/index.html"\n  status = 200`, 'toml')}
                className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer font-normal"
              >
                {copied === 'toml' ? <Check className="w-3.5 h-3.5 text-amber-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy toml</span>
              </button>
            </div>
            <pre className="bg-black/80 border border-white/10 text-slate-200 p-3.5 rounded-xl font-mono text-xs overflow-x-auto">
{`[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200`}
            </pre>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-colors cursor-pointer"
          >
            Got It, Close
          </button>
        </div>
      </div>
    </div>
  );
};
