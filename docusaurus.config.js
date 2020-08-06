module.exports = {
  title: 'Ajuda ErpLivre',
  tagline: 'Ajuda ErpLivre',
  url: 'https://ajuda.erplivre.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'kmee', // Usually your GitHub org/user name.
  projectName: 'erplivre-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ajuda',
      logo: {
        alt: 'Ajuda ErpLivre',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Primeiros Passos',
          position: 'left',
        },
        {
          to: 'cadastros',
          activeBasePath: 'docs',
          label: 'Cadastros',
          position: 'left',
        },
        {
          to: 'crm',
          activeBasePath: 'docs',
          label: 'CRM',
          position: 'left',
        },
        {
          to: 'vendas',
          activeBasePath: 'docs',
          label: 'Vendas e NF-E',
          position: 'left',
        },
        {
          to: 'servicos',
          activeBasePath: 'docs',
          label: 'Serviços e NFS-E',
          position: 'left',
        },
        {
          to: 'estoque',
          activeBasePath: 'docs',
          label: 'Estoque',
          position: 'left',
        },
        {
          to: 'compras',
          activeBasePath: 'docs',
          label: 'Compras',
          position: 'left',
        },
        {
          to: 'financeiro',
          activeBasePath: 'docs',
          label: 'Financeiro',
          position: 'left',
        },
        {
          to: 'contabil',
          activeBasePath: 'docs',
          label: 'Contábil',
          position: 'left',
        },
        {
          href: 'https://www.erplivre.com.br',
          label: 'Acesso ao ErpLivre',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} ErpLivre, KMEE INFORMATICA LTDA`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: '/', // Set this value to '/'.
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/kmee/erplivre-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
