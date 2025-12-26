import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import CustomSearchDialog from '@/components/search';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'FairArena Documentation',
    template: '%s | FairArena Docs',
  },
  description: 'Complete documentation for FairArena platform - guides, tutorials, API reference, and more. Learn how to use FairArena effectively.',
  metadataBase: new URL('https://fair.sakshamg.me'),
  keywords: ['FairArena', 'documentation', 'guides', 'tutorials', 'API', 'reference', 'platform'],
  authors: [{ name: 'FairArena Team' }],
  creator: 'FairArena',
  publisher: 'FairArena',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fair.sakshamg.me',
    siteName: 'FairArena Documentation',
    title: 'FairArena Documentation',
    description: 'Complete documentation for FairArena platform - guides, tutorials, API reference, and more. Learn how to use FairArena effectively.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'FairArena Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FairArena Documentation',
    description: 'Complete documentation for FairArena platform - guides, tutorials, API reference, and more.',
    images: ['/twitter-image'],
    creator: '@FairArena',
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
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  manifest: '/manifest',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FairArena Documentation',
    description: 'Complete documentation for FairArena platform',
    url: 'https://fair.sakshamg.me',
    publisher: {
      '@type': 'Organization',
      name: 'FairArena',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fair.sakshamg.me/icon',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://fair.sakshamg.me/search?q={search_term_string}',
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
      </body>
    </html>
  );
}
