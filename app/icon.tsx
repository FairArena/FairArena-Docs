export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default async function Icon() {
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
