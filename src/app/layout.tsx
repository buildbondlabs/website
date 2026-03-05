import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'BuildBond — Launch Tokens Backed by Code',
  description:
    'The first decentralized launch platform where verified developers stake reputation and lock collateral on Solana. AI trust scores, fair bonding curves, DEX graduation.',
  openGraph: {
    title: 'BuildBond — Launch Tokens Backed by Code',
    description:
      'The first decentralized launch platform where verified developers stake reputation and lock collateral on Solana. AI trust scores, fair bonding curves, DEX graduation.',
    url: 'https://buildbond.io',
    siteName: 'BuildBond',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@buildbondlabs',
    title: 'BuildBond — Launch Tokens Backed by Code',
    description:
      'The first decentralized launch platform where verified developers stake reputation and lock collateral on Solana.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="c0abf47d-a78d-4015-bbb1-03d8d84d5839"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
