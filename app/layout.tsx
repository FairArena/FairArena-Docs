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
  description: 'Complete documentation for FairArena platform',
  metadataBase: new URL('https://fair.sakshamg.me'),
  openGraph: {
    title: 'FairArena Documentation',
    description: 'Complete documentation for FairArena platform',
    type: 'website',
    siteName: 'FairArena Docs',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog: CustomSearchDialog }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
