// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
//config;
// Integrate Plausible Analytics with your Docusaurus documentation site.
// Quelle https://plausible.io/docs/docusaurus-integration
  scripts: [{src: 'https://plausible.io/js/plausible.js', defer: true, 'data-domain': 'www.Augenarzt-Hetzendorf.at'}],
//
 themes: ['@docusaurus/theme-live-codeblock'],
 themes: ['theme-blog'],
 // Bootstrap styling,
 themes: ['theme-blog-bootstrap'],
// Suchfunktion
 themes: [
   [
     require.resolve("@easyops-cn/docusaurus-search-local"),
     {
   // `hashed` is recommended as long-term-cache of index file is possible.
       hashed: true,
       // For Docs using Chinese, The `language` is recommended to set to:
       language: ["de", "en"],
     },  ],  ],
// Mehrsprachigkeit
     i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    localeConfigs: {
      de: {
        htmlLang: 'de-DE',
        direction: 'ltr',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      en: {
        htmlLang: 'en-GB',
        direction: 'ltr',
      },
    },
  },

/** @type {import('@docusaurus/types').Config} */
// const config = {
title: 'Augenarzt-Hetzendorf',
tagline: 'Schön, Sie zu sehen!',
url: 'https://Augenarzt-Hetzendorf.at',
baseUrl: '/',
onBrokenLinks: 'throw',
onBrokenMarkdownLinks: 'warn',
favicon: 'img/branding/favicon.ico',
organizationName: 'Augenarzt-Hetzendorf', // Usually your GitHub org/user name.
projectName: 'www.Augenarzt-Hetzendorf.at', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Augenarzt-Hetzendorf/www.augenarzt-hetzendorf.at/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Augenarzt-Hetzendorf/www.augenarzt-hetzendorf.at/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Augenarzt-Hetzendorf',
        logo: {
          alt: 'Logo-Augenarzt-Hetzendorf',
          src: 'img/branding/logo.svg',
        },
        items: [
            {
                      type: 'docSidebar',
                      position: 'left',
                      sidebarId: 'Sidebar10',
                      label: 'Über ...',
            },
            {
                      type: 'docSidebar',
                      position: 'left',

                      sidebarId: 'Sidebar20',
                      label: 'Leistungen',
            },

          {to: '/blog', label: 'News', position: 'left'},
          {
            href: 'https://github.com/Augenarzt-Hetzendorf/www.augenarzt-hetzendorf.at/tree/main',
            label: 'Source',
            position: 'right',
          },
          {
                    type: 'docSidebar',
                    position: 'left',
                    sidebarId: 'Sidebar80',
                    label: 'Kontakt',
          },
        ],
      },


      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wissenswertes',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Adresse',
                href: '/docs/Kontakt',
              },
              {
                label: 'Ordinationszeiten',
                href: '/docs/Kontakt/Terminvereinbarung',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/augenordination',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Impressum',
                to: '/docs/Kontakt/Rechtliche-Hinweise/Impressum',
              },
              {
                label: 'Rechtliche-Hinweise',
                href: '/docs/Kontakt/Rechtliche-Hinweise/Legal',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Meines Sozialversicherung',
                to: 'https://www.meinesv.at/',
              },
              {
                label: 'Gesundheitskasse',
                href: 'https://www.gesundheitskasse.at/',
              },
              {
                label: 'Ärztekammer',
                to: 'https://www.aekwien.at/',
              },
              {
                label: 'Gesundheitskasse',
                href: 'https://www.gesundheitskasse.at/',
              },
            ],
        },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} by Privatordination Priv.Doz.Dr.med. Saskia Tipotsch, Augenarzt-Hetzendorf. Build and operated by tipcon KG.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
