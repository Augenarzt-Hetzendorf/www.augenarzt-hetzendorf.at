// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Augenarzt-Hetzendorf',
  tagline: 'Schön, Sie zu sehen!',
  url: 'https://Augenarzt-Hetzendorf.at',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
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
          alt: 'My Site Logo',
          src: 'img/logo.svg',
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
            title: 'Docs',
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
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Source',
                href: 'https://github.com/Augenarzt-Hetzendorf/www.augenarzt-hetzendorf.at/tree/main',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
