export default function Problem() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Problem */}
        <div className="p-8 rounded-2xl border border-[var(--border)]" style={{ background: 'var(--bg-card)' }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(239, 68, 68, 0.1)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[var(--red)]">The Problem</h3>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            90% of token launches end in rug pulls. Anon devs, no accountability, no collateral. Investors are left holding worthless tokens with no recourse.
          </p>
        </div>

        {/* Solution */}
        <div className="p-8 rounded-2xl border border-[var(--border)]" style={{ background: 'var(--bg-card)' }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7l9 5 9-5-9-5z" />
              <path d="M3 17l9 5 9-5M3 12l9 5 9-5" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[var(--green)]">The Solution</h3>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            BuildBond requires developers to verify their code, stake SOL as collateral, and earn transparent AI trust scores. Real accountability, on-chain.
          </p>
        </div>
      </div>
    </section>
  );
}
