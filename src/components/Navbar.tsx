'use client';

import { useState } from 'react';
import Toast from './Toast';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Community', href: '#community' },
];

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScbl9bgopTSqDtlmXWj8PbRC-ac114AmBDudQMmlwg_x_h20A/viewform?usp=publish-editor';

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleLaunchAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]" style={{ background: 'rgba(17, 17, 24, 0.8)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="text-xl font-bold text-[var(--accent)]">
              BuildBond
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop right side */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://x.com/buildbondlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Follow on X"
              >
                <XIcon />
              </a>
              <button
                onClick={handleLaunchAppClick}
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors cursor-pointer"
                style={{ background: 'var(--accent)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
              >
                Launch App
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-[var(--text-primary)] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[var(--border)]" style={{ background: 'rgba(17, 17, 24, 0.95)' }}>
            <div className="px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-[var(--border)]">
                <a
                  href="https://x.com/buildbondlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Follow on X"
                >
                  <XIcon />
                </a>
                <button
                  onClick={handleLaunchAppClick}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white cursor-pointer"
                  style={{ background: 'var(--accent)' }}
                >
                  Launch App
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <Toast
        message="BuildBond App has not launched yet. Fill out the form to be the first to know when we go live!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        link={{
          url: GOOGLE_FORM_URL,
          text: 'Join Waitlist',
        }}
      />
    </>
  );
}
