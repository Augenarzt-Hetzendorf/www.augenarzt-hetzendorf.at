const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Augenarzt-Hetzendorf',
  tagline: 'Herzlich Willkommen in meiner Ordination für Augenheilkunde in Wien. (Vorsorge-)Untersuchungen - Augenoperationen - Uveitis - Spezialbehandlungen',
  url: 'https://www.augenarzt-hetzendorf.at',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'Image-Assets/favicon.ico',
  organizationName: 'Augenarzt-Hetzendorf', // Usually your GitHub org/user name.
  projectName: 'Augenarzt-Hetzendorf', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Augenarzt-Hetzendorf',
      logo: {
        alt: 'Augenarzt-Hetzendorf',
        src: 'Image-Assets/2021-04_Logo-Augenarzt-Hetzendorf.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Informationen',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Augenarzt-Hetzendorf/',
          label: 'Source',
          position: 'right',
        },
        {
          to: 'kontakt',
          activeBasePath: 'pages',
          label: 'Kontakte',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Informationen',
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
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
