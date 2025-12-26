import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { BookOpen } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HomeLayout
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FairArena</span>
          </div>
        ),
        transparentMode: 'top',
      }}
      githubUrl="https://github.com/FairArena/FairArena"
      links={[
        {
          text: 'Documentation',
          url: '/docs',
          active: 'nested-url',
        },
        {
          text: 'Platform',
          url: 'https://fair.sakshamg.me',
          external: true,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
