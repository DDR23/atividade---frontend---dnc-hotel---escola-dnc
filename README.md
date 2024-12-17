# gerenciador-de-reservas-para-hoteis-frontend

## Ambiente de Desenvolvimento

- **node** v22.11.0
- **npm** v10.9.0
- **next** v15.0.3

### Instalação

- Criação do projeto

```bash
 npx create-next-app@latest --ts
```

- Instalando dependedncias do Mantine

```bash
 npm install @mantine/core @mantine/hooks
```

- Configurando PostCSS Setup

```bash
 npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars
```

- É preciso criar um arquivo 'postcss.config.cjs' na rais do projeto e colar o conteudo abaixo:

```cjs
module.exports = {
  plugins: {
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
  },
};
```

- É preciso alterar o conteúdo do arquivo next.config.ts para:

```ts
export default {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};
```
