'use client';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { cn } from '../../lib/cn';
import { type ComponentProps, useRef } from 'react';
import { mergeRefs } from '../../lib/merge-refs';
import { TocThumb, useTOCItems } from './index';
import * as Primitive from 'fumadocs-core/toc';

export function TOCItems({ ref, className, ...props }: ComponentProps<'div'>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = useTOCItems();
  const { text } = useI18n();

  if (items.length === 0)
    return (
      <div className="rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground">
        {text.tocNoHeadings}
      </div>
    );

  return (
    <>
      <TocThumb
        containerRef={containerRef}
        className="absolute top-0 translate-y-(--fd-top) h-(--fd-height) w-px bg-fd-primary transition-[translate,height]"
      />
      <div
        ref={mergeRefs(ref, containerRef)}
        className={cn(
          'flex flex-col relative ps-3',
          className,
        )}
        {...props}
      >
        {items.map((item) => (
          <TOCItem key={item.url} item={item} />
        ))}
      </div>
    </>
  );
}

function TOCItem({ item }: { item: Primitive.TOCItemType }) {
  return (
    <Primitive.TOCItem
      href={item.url}
      className={cn(
        'prose py-1.5 text-sm text-fd-muted-foreground transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary',
        // Vertical line on the left
        'relative after:absolute after:left-[-12px] after:top-0 after:bottom-0 after:w-px after:bg-fd-foreground/10',
        // Truncate vertical line for first and last items
        'first:after:top-[50%] last:after:bottom-[50%]',
        // Horizontal connector with curved corner using border-radius effect
        'before:content-[""] before:absolute before:left-[-12px] before:top-[calc(50%-0.5px)] before:w-3 before:h-px before:bg-fd-foreground/10',
        // Adjust padding for nested items
        item.depth <= 2 && 'ps-0',
        item.depth === 3 && 'ps-3 before:left-[-15px]',
        item.depth >= 4 && 'ps-6 before:left-[-18px]',
      )}
    >
      {item.title}
    </Primitive.TOCItem>
  );
}
