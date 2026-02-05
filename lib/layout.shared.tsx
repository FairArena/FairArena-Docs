import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "FairArena Docs",
      url: "https://fairarena.app",
    },
    links: [
      {
        text: "Documentation",
        url: "https://fairarena.app",
        active: "nested-url",
      },
    ],
    githubUrl: "https://github.com/FairArena/FairArena-Docs",
  };
}
