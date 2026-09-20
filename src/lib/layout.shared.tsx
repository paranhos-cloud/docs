import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span className="font-semibold">{appName}</span>
          <span className="text-fd-muted-foreground">docs</span>
        </>
      ),
      url: '/',
    },
    links: [
      { text: 'Painel', url: 'https://app.paranhos.cloud', external: true },
      { text: 'Site', url: 'https://paranhos.cloud', external: true },
    ],
  };
}
