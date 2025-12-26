import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';
export const alt = 'FairArena Documentation';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Reuse the same design as OG image for Twitter
export default async function TwitterImage() {
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
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 70% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
            display: 'flex',
          }}
        />

        {/* Logo/Icon */}
        <div
          style={{
            display: 'flex',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)',
            borderRadius: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '40px',
            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.5)',
          }}
        >
          F
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: '72px',
            fontWeight: 'black',
            background: 'linear-gradient(90deg, #3b82f6 0%, #9333ea 50%, #ec4899 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
          }}
        >
          FairArena
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: '36px',
            color: '#94a3b8',
            fontWeight: '500',
          }}
        >
          Documentation & API Reference
        </div>

        {/* Bottom Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '12px 24px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '12px',
              color: '#60a5fa',
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            📚 Guides & Tutorials
          </div>
          <div
            style={{
              display: 'flex',
              padding: '12px 24px',
              background: 'rgba(147, 51, 234, 0.1)',
              border: '2px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '12px',
              color: '#c084fc',
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            ⚡ Quick Start
          </div>
          <div
            style={{
              display: 'flex',
              padding: '12px 24px',
              background: 'rgba(236, 72, 153, 0.1)',
              border: '2px solid rgba(236, 72, 153, 0.3)',
              borderRadius: '12px',
              color: '#f472b6',
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            🎯 API Reference
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
