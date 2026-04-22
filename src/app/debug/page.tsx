'use client';

import { useState } from 'react';

export default function DebugPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const runDiagnostic = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/test-email');
      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setResult({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10 font-mono">
      <h1 className="text-2xl mb-10 text-primary">KROMIQ // ENGINE_DIAGNOSTICS</h1>
      
      <button 
        onClick={runDiagnostic}
        disabled={loading}
        className="px-6 py-3 bg-primary text-white rounded-full hover:bg-opacity-80 transition-all mb-10"
      >
        {loading ? 'EXECUTING...' : 'RUN_DIAGNOSTIC'}
      </button>

      {result && (
        <pre className="p-6 bg-zinc-900 rounded-xl border border-white/10 overflow-auto max-w-4xl text-sm">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}

      <div className="mt-20 text-foreground/20 text-[10px] uppercase tracking-widest">
        // Diagnostic endpoint: /api/test-email
      </div>
    </div>
  );
}
