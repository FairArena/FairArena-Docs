import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { BookOpen, Github, MessageCircle, ExternalLink } from 'lucide-react';
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FairArena</span>
          </div>
        ),
        url: 'https://fair.sakshamg.me',
        transparentMode: 'top',
      }}
      sidebar={{
        collapsible: true,
        defaultOpenLevel: 1,
        footer: (
          <div className="flex flex-col gap-3 p-4 mt-4 border-t">
            <a
              href="https://github.com/FairArena/FairArena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3 h-3 ml-auto" />
            </a>
            <Link
              href="/docs/support"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors group"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Get Support</span>
            </Link>
            <div className="pt-3 border-t text-xs text-muted-foreground">
              <p className="flex items-center gap-1">
                Made with <span className="text-red-500 animate-pulse">❤️</span> by FairArena Team
              </p>
            </div>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
