# Portfólio — Eduardo Bellini

Portfólio profissional feito com Next.js, React, TypeScript e CSS responsivo. Os projetos selecionados são enriquecidos com dados da API pública do GitHub durante a renderização e possuem fallback local.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Personalizar conteúdo

- Dados pessoais, projetos, cursos e habilidades: `src/data/portfolio.ts`
- Textos e estrutura das seções: `src/components/`
- Cores, layout e responsividade: `src/app/globals.css`
- Metadados de SEO e compartilhamento: `src/app/layout.tsx`

## Validar produção

```bash
npm run lint
npm run build
npm start
```

## Deploy

### Vercel

1. Envie o repositório para o GitHub.
2. Importe-o em [vercel.com/new](https://vercel.com/new).
3. Mantenha o preset **Next.js** e publique. A URL de produção da Vercel será usada automaticamente nos metadados sociais.

### Outras plataformas Node.js

Use `npm run build` como comando de build e `npm start` como comando de inicialização. O ambiente deve usar uma versão do Node.js compatível com o Next.js 16.

Se usar outra plataforma, configure `NEXT_PUBLIC_SITE_URL` com o domínio definitivo (por exemplo, `https://seudominio.com.br`) para gerar URLs sociais absolutas.
