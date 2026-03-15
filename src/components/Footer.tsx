const APP_URL = 'https://app.buildbond.io';

const FOOTER_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Community', href: '#community' },
  // { label: 'Launch App', href: APP_URL },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="BuildBond" className="h-8 w-auto" />
              <span className="text-xl font-bold text-[var(--accent)]">BuildBond</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              The first launch platform where developers stake reputation and lock collateral. Building trust in token launches on Solana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-4">Social</h4>
            <a
              href="https://x.com/buildbondlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @buildbondlabs
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-8 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            &copy; 2026 BuildBond. Reputation-backed token launches on Solana.
          </p>
        </div>
      </div>
    </footer>
  );
}
