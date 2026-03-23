import { getPageImage, source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { LLMCopyButton, ViewOptions } from "@/components/page-actions";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { Step, Steps } from "fumadocs-ui/components/steps";
import Link from "next/link";
import { ChevronRight, Edit } from "lucide-react";
import { Feedback } from "@/components/feedback/client";
import { onPageFeedbackAction } from "@/lib/feedback";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const path = params.slug?.join("/") || "index";

  const breadcrumb = page.slugs.map((slug, i) => ({
    name: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    url: `/docs/${page.slugs.slice(0, i + 1).join("/")}`,
  }));

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        enabled: true,
        footer: (
          <div className="pt-4 mt-4 border-t space-y-4">
            <a
              href={`https://github.com/FairArena/FairArena-Docs/blob/main/content/docs/${path}.mdx`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Edit className="w-3 h-3 group-hover:scale-110 transition-transform" />
              Edit this page
            </a>
          </div>
        ),
      }}
      breadcrumb={{
        enabled: true,
      }}
    >
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        {page.slugs.map((slug, i) => (
          <div key={i} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/docs/${page.slugs.slice(0, i + 1).join("/")}`}
              className="hover:text-foreground transition-colors capitalize"
            >
              {slug.split("-").join(" ")}
            </Link>
          </div>
        ))}
      </div>

      <DocsTitle className="text-4xl font-bold mb-4">
        {page.data.title}
      </DocsTitle>

      {/* Page Actions - Copy and Open */}
      <div className="flex items-center gap-2 mb-4">
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/FairArena/FairArena-Docs/blob/main/content/docs/${path}.mdx`}
        />
      </div>

      <DocsDescription className="text-lg text-muted-foreground mb-6">
        {page.data.description}
      </DocsDescription>

      {/* Page metadata */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
        <a
          href={`https://github.com/FairArena/FairArena-Docs/blob/main/content/docs/${path}.mdx`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span>Edit on GitHub</span>
        </a>
        {((page.data as any)?.lastModified) ? (
          <div className="text-xs text-muted-foreground">
            Last updated{' '}
            {new Date((page.data as any).lastModified).toLocaleString(undefined, {
              dateStyle: 'medium',
              timeStyle: 'short',
            })}
          </div>
        ) : null}
      </div>

      <DocsBody>
        <MDX
          components={{
            ...getMDXComponents({
              a: createRelativeLink(source, page),
            }),
            InlineTOC,
            Step,
            Steps,
          }}
        />
      </DocsBody>
      <Feedback onSendAction={onPageFeedbackAction} />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const image = getPageImage(page);
  const url = `https://fairarena.app${page.url}`;

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: "article",
      url,
      siteName: "FairArena Documentation",
      images: [
        {
          url: image.url,
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: [image.url],
      creator: "@FairArena",
    },
  };
}
