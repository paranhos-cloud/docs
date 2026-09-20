# Paranhos Cloud — documentação

Site de documentação publicado em [docs.paranhos.cloud](https://docs.paranhos.cloud).

Next.js com export estático e [Fumadocs](https://fumadocs.dev). O conteúdo fica em
`content/docs/`, em MDX; cada pasta tem um `meta.json` com o título e a ordem das páginas.

## Rodar localmente

```bash
npm install
npm run dev
```

O site sobe em http://localhost:3000. As páginas ficam na raiz: `/`, `/comecar/...`,
`/plataforma/...`, `/api/...`.

## Verificações

```bash
npm run lint
npm run types:check
npm run build
```

## Publicação

O deploy é feito pela própria Paranhos Cloud: o projeto está conectado a este repositório e cada
push na `main` roda o workflow `.github/workflows/paranhos-cloud.yml`, que constrói o site no
GitHub Actions e envia a pasta `out/`.
