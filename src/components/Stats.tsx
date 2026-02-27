const STATS = [
  { label: 'Total Value Locked', value: '$0' },
  { label: 'Projects Launched', value: '0' },
  { label: 'Developers Verified', value: '0' },
];

export default function Stats() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-8 rounded-xl border border-[var(--border)] text-center"
              style={{ background: 'var(--bg-card)' }}
            >
              <div
                className="text-4xl sm:text-5xl font-bold mb-2"
                style={{ color: 'var(--accent)' }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[var(--text-secondary)] mt-8">
          Platform launching soon on Solana Devnet
        </p>
      </div>
    </section>
  );
}
