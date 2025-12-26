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
import { ChevronRight, Clock, Edit, Github } from "lucide-react";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const path = page.file?.path || "";

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
      lastUpdate={page.data.lastModified}
      editOnGithub={{
        owner: "FairArena",
        repo: "FairArena",
        sha: "main",
        path,
      }}
      tableOfContent={{
        enabled: true,
        header: (
          <div className="space-y-3">
            <div className="pb-3 border-b">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                🤖 Open in AI
              </p>
              <div className="flex flex-col gap-2">
                <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
                <ViewOptions
                  markdownUrl={`${page.url}.mdx`}
                  githubUrl={`https://github.com/FairArena/FairArena/blob/main/docs/content/docs/${path}`}
                />
              </div>
            </div>
          </div>
        ),
        footer: (
          <div className="pt-4 mt-4 border-t space-y-4">
            <a
              href={`https://github.com/FairArena/FairArena/blob/main/docs/content/docs/${path}`}
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
        items: [{ name: "Home", url: "/docs" }, ...breadcrumb],
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
      <DocsDescription className="text-lg text-muted-foreground mb-6">
        {page.data.description}
      </DocsDescription>

      {/* Page metadata */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
        {page.data.lastModified && (
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>
              Updated{" "}
              {new Date(page.data.lastModified).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        )}
        <a
          href={`https://github.com/FairArena/FairArena/blob/main/docs/content/docs/${path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>Edit on GitHub</span>
        </a>
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

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
