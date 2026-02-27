const FEATURES = [
  {
    emoji: '\u{1F510}',
    title: 'Locked Collateral',
    description: 'Dev SOL locked with time-based vesting. Real skin in the game that protects investors.',
  },
  {
    emoji: '\u{1F916}',
    title: 'AI Trust Scores',
    description: 'Repo quality, dev credibility, and scam risk analysis powered by transparent AI models.',
  },
  {
    emoji: '\u{1F4C8}',
    title: 'Fair Bonding Curve',
    description: 'Constant-product AMM with transparent price discovery. No insider advantages.',
  },
  {
    emoji: '\u{1F393}',
    title: 'DEX Graduation',
    description: 'Auto-migrate to Raydium when the bonding curve threshold is met. Seamless liquidity.',
  },
  {
    emoji: '\u{231B}',
    title: 'Developer Vesting',
    description: 'Linear vesting schedule prevents dump-and-run. Aligned incentives for the long term.',
  },
  {
    emoji: '\u{2705}',
    title: 'GitHub Verified',
    description: 'Prove repo ownership and build reputation on-chain. Verifiable developer identity.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Features</h2>
        <p className="text-[var(--text-secondary)] text-center mb-16 max-w-2xl mx-auto">
          Every tool you need for a transparent, accountable token launch.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="text-3xl mb-4">{feature.emoji}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
