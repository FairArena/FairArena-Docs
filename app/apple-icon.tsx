export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default async function AppleIcon() {
  const imageData = await fetch(
    'https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png'
  ).then((res) => res.arrayBuffer());

  return new Response(imageData, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
