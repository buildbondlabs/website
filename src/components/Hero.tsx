'use client';

const APP_URL = 'https://app.buildbond.io';

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              'radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(37, 99, 235, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)', animationDelay: '1.5s' }}
        />
      </div>

      {/* Floating decorations */}
      <div className="absolute top-32 left-12 animate-float opacity-10 hidden lg:block" style={{ animationDelay: '0s' }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="8" width="48" height="48" rx="8" stroke="var(--accent)" strokeWidth="2" />
          <path d="M24 20v24M20 32h24" stroke="var(--accent)" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="absolute bottom-32 right-16 animate-float opacity-10 hidden lg:block" style={{ animationDelay: '2s' }}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 4L52 16v24L28 52 4 40V16L28 4z" stroke="var(--accent)" strokeWidth="2" />
          <circle cx="28" cy="28" r="8" stroke="var(--accent)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 animate-fade-in-up">
          Launch Tokens{' '}
          <span
            className="animate-gradient"
            style={{
              background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
            }}
          >
            Backed by Code
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          The first launch platform where developers stake their reputation and lock collateral. Every token is backed by verified code, not empty promises.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href={APP_URL}
            className="inline-flex items-center px-8 py-3.5 rounded-lg text-base font-semibold text-white transition-all hover:scale-105"
            style={{ background: 'var(--accent)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
          >
            Launch App
            <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="https://x.com/buildbondlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-lg text-base font-semibold border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-all hover:scale-105"
            style={{ background: 'transparent' }}
          >
            <XIcon className="mr-2" />
            Follow on X
          </a>
        </div>
      </div>
    </section>
  );
}
