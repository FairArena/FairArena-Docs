import { source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const pages = source.getPages();
  
  const indexes = pages.map((page) => ({
    id: page.url,
    url: page.url,
    title: page.data.title,
    description: page.data.description || '',
    structured: {
      headings: page.data.toc || [],
    },
  }));

  return Response.json(indexes);
}
