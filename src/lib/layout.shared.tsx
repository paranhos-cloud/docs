import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      /*
       * The site follows the reader's theme, so each one gets the legible version of the lockup.
       * The export is static, so the images are served as they are instead of going through the
       * image optimizer.
       */
      title: (
        <span className="inline-flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-light.png" alt="Paranhos Cloud" width={563} height={96} className="h-6 w-auto dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-dark.png"
            alt="Paranhos Cloud"
            width={627}
            height={96}
            className="hidden h-6 w-auto dark:block"
          />
          <span className="text-fd-muted-foreground">docs</span>
        </span>
      ),
      url: '/',
    },
    links: [
      { text: 'Painel', url: 'https://app.paranhos.cloud', external: true },
      { text: 'Site', url: 'https://paranhos.cloud', external: true },
    ],
  };
}
