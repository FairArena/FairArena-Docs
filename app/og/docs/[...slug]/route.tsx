import { getPageImage, source } from '@/lib/source';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: RouteContext<'/og/docs/[...slug]'>,
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          position: 'relative',
          padding: '80px',
        }}
      >
        {/* Background gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
            display: 'flex',
          }}
        />
        
        {/* Logo */}
        <Image
          src="https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png"
          alt='Fairarena Logo'
          width="100"
          height="100"
          style={{
            marginBottom: '30px',
            borderRadius: '20px',
            boxShadow: '0 15px 40px rgba(59, 130, 246, 0.4)',
          }}
        />
        
        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: '56px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            maxWidth: '900px',
          }}
        >
          {page.data.title}
        </div>
        
        {/* Description */}
        {page.data.description && (
          <div
            style={{
              display: 'flex',
              fontSize: '28px',
              color: '#94a3b8',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            {page.data.description}
          </div>
        )}
        
        {/* Site badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 28px',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '12px',
            color: '#60a5fa',
            fontSize: '24px',
            fontWeight: '600',
          }}
        >
          FairArena Docs
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
