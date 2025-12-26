import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'FairArena Docs',
      url: 'https://fair.sakshamg.me',
    },
    links: [
      {
        text: 'Documentation',
        url: 'https://fair.sakshamg.me',
        active: 'nested-url',
      },
    ],
    githubUrl: 'https://github.com/FairArena/FairArena-Docs',
  };
}
