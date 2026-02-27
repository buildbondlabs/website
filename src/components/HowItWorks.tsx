const STEPS = [
  {
    number: 1,
    title: 'Verify Your Repo',
    description: 'Connect GitHub, prove code ownership with a verification file.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Stake Collateral',
    description: 'Lock SOL as collateral. Skin in the game builds trust.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Launch on Bonding Curve',
    description: 'Fair price discovery. No presales, no hidden allocations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Graduate to DEX',
    description: 'When the curve fills, liquidity migrates to Raydium for open trading.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-[var(--text-secondary)] text-center mb-16 max-w-2xl mx-auto">
          From code verification to open DEX trading — four steps to a trustworthy token launch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: 'var(--border)' }} />

          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Number badge */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10 border-2"
                style={{
                  background: 'var(--bg-primary)',
                  borderColor: 'var(--accent)',
                  color: 'var(--accent)',
                }}
              >
                {step.icon}
              </div>

              <div
                className="absolute -top-1 -right-1 md:top-0 md:right-auto md:left-[calc(50%+16px)] w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white z-20"
                style={{ background: 'var(--accent)' }}
              >
                {step.number}
              </div>

              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
