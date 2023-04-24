import {Suspense} from 'react';
import * as React from 'react';
import {useRouter} from 'next/router';
import cn from 'classnames';

// import(/* webpackPrefetch: true */ '../MDX/CodeBlock/CodeBlock');

interface PageProps {
  children: React.ReactNode;
  meta: {title?: string; description?: string};
}

export function Page({children}: PageProps) {
  const {asPath} = useRouter();
  return (
    <Suspense fallback={null}>
      <main className="min-w-0 isolate">
        <article
          className="break-words font-normal text-primary dark:text-primary-dark"
          key={asPath}>
          <div
            className={cn(
              'max-w-7xl mx-auto',
              'lg:flex lg:flex-col lg:items-center'
            )}>
              {children}
          </div>
        </article>
      </main>
    </Suspense>
  );
}
