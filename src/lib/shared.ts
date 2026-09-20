import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Paranhos Cloud';
export const appDescription = 'Documentação da Paranhos Cloud: publique sites e aplicações em minutos.';
export const siteUrl = 'https://docs.paranhos.cloud';

/** The docs are the site: pages live at the root of docs.paranhos.cloud. */
export const docsRoute = '/';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'paranhos-cloud',
  repo: 'docs',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
