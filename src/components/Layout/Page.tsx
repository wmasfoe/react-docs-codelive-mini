import {Suspense} from 'react';
import * as React from 'react';
import {useRouter} from 'next/router';
import {TocContext} from '../MDX/TocContext';
import type {TocItem} from '../MDX/TocContext';
import cn from 'classnames';

// import(/* webpackPrefetch: true */ '../MDX/CodeBlock/CodeBlock');

interface PageProps {
  children: React.ReactNode;
  toc: Array<TocItem>;
  meta: {title?: string; description?: string};
  section: 'learn' | 'reference' | 'community' | 'blog' | 'home' | 'unknown';
}

export function Page({children, toc, section}: PageProps) {
  const {asPath} = useRouter();

  let content = (
    <div
      className={cn(
        'max-w-7xl mx-auto',
        section === 'blog' && 'lg:flex lg:flex-col lg:items-center'
      )}>
      <TocContext.Provider value={toc}>{children}</TocContext.Provider>
    </div>
  );
  return (
    <Suspense fallback={null}>
      <main className="min-w-0 isolate">
        <article
          className="break-words font-normal text-primary dark:text-primary-dark"
          key={asPath}>
          {content}
        </article>
      </main>
    </Suspense>
  );
}
