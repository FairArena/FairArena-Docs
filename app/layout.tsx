import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import CustomSearchDialog from '@/components/search';

import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
});

import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'FairArena - AI-Powered Hackathon Management Platform',
    template: '%s | FairArena',
  },
  description: 'FairArena - AI-Powered Hackathon Management and Project Evaluation Platform. FairArena is designed for organizers, judges, and participants, automating the judging process with advanced AI to analyze project websites and ensure unbiased, fair evaluations. Features include real-time leaderboards, comprehensive analytics, team collaboration tools, and seamless authentication integration.',
  metadataBase: new URL('https://docs.fair.sakshamg.me'),
  keywords: ['hackathon management', 'AI judging', 'project evaluation', 'FairArena', 'hackathon platform', 'organizers', 'judges', 'participants'],
  authors: [{ name: 'FairArena Team' }],
  creator: 'FairArena',
  publisher: 'FairArena',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.fair.sakshamg.me',
    siteName: 'FairArena',
    title: 'FairArena - AI-Powered Hackathon Management Platform',
    description: 'FairArena is designed for organizers, judges, and participants, automating the judging process with advanced AI to analyze project websites and ensure unbiased, fair evaluations.',
    images: [
      {
        url: 'https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png',
        width: 1200,
        height: 630,
        alt: 'FairArena Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FairArena - AI-Powered Hackathon Management Platform',
    description: 'FairArena is designed for organizers, judges, and participants, automating the judging process with advanced AI to analyze project websites and ensure unbiased, fair evaluations.',
    images: ['https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png'],
    creator: '@FairArena',
  },
  icons: {
    icon: 'https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png',
    apple: 'https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'FairArena',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FairArena Documentation',
    description: 'Complete documentation for FairArena platform',
    url: 'https://docs.fair.sakshamg.me',
    publisher: {
      '@type': 'Organization',
      name: 'FairArena',
      logo: {
        '@type': 'ImageObject',
        url: 'https://docs.fair.sakshamg.me/icon',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://docs.fair.sakshamg.me/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog: CustomSearchDialog }}>
          {children}
        </RootProvider>
        
        <div className="gtranslate_wrapper"></div>
        
        <Script id="gtranslate-settings" strategy="afterInteractive">
          {`window.gtranslateSettings = {"default_language":"en","native_language_names":true,"detect_browser_language":true,"wrapper_selector":".gtranslate_wrapper"}`}
        </Script>
        <Script src="https://cdn.gtranslate.net/widgets/latest/float.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
