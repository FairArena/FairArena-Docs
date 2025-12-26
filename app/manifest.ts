import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FairArena Documentation',
    short_name: 'FairArena Docs',
    description: 'Complete documentation for FairArena platform - guides, tutorials, and API reference',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon?size=32',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon?size=192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon?size=512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
