import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Callout } from 'fumadocs-ui/components/callout';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { File, Folder, Files } from 'fumadocs-ui/components/files';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Step,
    Steps,
    Callout,
    Card,
    Cards,
    Tab,
    Tabs,
    TypeTable,
    Accordion,
    Accordions,
    ImageZoom,
    File,
    Folder,
    Files,
    img: (props: any) => (
      <ImageZoom
        {...props}
        className="rounded-lg border shadow-sm"
      />
    ),
    table: (props: any) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden" {...props} />
      </div>
    ),
    th: (props: any) => (
      <th
        className="border border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-3 text-left font-semibold text-sm"
        {...props}
      />
    ),
    td: (props: any) => (
      <td
        className="border border-gray-200 dark:border-gray-800 px-4 py-3 text-sm"
        {...props}
      />
    ),
    tr: (props: any) => (
      <tr
        className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
        {...props}
      />
    ),
    blockquote: (props: any) => (
      <blockquote
        className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-r-lg italic"
        {...props}
      />
    ),
    code: (props: any) => (
      <code
        className="px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-mono border border-gray-200 dark:border-gray-700"
        {...props}
      />
    ),
    pre: (props: any) => (
      <pre
        className="p-4 rounded-xl border shadow-sm overflow-x-auto my-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
        {...props}
      />
    ),
    ...components,
  };
}
