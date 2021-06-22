/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'leetcode solutions',
  tagline: 'practicing leetcode',
  url: 'https://leetcode-solutions.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'leetcode-solutions', // Usually your GitHub org/user name.
  projectName: 'leetcode-solutions.github.io', // Usually your repo name.
  stylesheets: [
    {
      href: `/katex/katex.min.css`,
      type: 'text/css',
    },
  ],
  themeConfig: {
    hideableSidebar: true,
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
      darkTheme: require('prism-react-renderer/themes/nightOwl'),
      additionalLanguages: [
        'rust',
        'haskell',
      ],
    },
    navbar: {
      title: 'leetcode solutions',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/leetcode-solutions/leetcode-solutions.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Leetcode',
          items: [
            {
              label: 'Leetcode',
              href: 'https://leetcode.com',
            },
          ],
        },
        {
          title: 'Misc',
          items: [
            {
              label: 'Repository',
              href: 'https://github.com/leetcode-solutions/leetcode-solutions.github.io',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'z_lc',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/leetcode-solutions/leetcode-solutions.github.io/edit/main',
          beforeDefaultRemarkPlugins:[
            require('./plugins/remark-plugin-code-subsuper'),
          ],
          remarkPlugins: [
            require('remark-math'),
            [require('docusaurus-remark-plugin-codetabs'), {
              sync: true,
              fileBasePath: './z_lc',
              customLabels: {
                'python': 'Python3',
                'cpp': 'C++17',
              },
            }],
          ],
          rehypePlugins: [
            require('rehype-katex'),
          ],
          admonitions: {
            infima: true,
            customTypes: {
              
            },
          },
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            let sidebarItems = await defaultSidebarItemsGenerator(args);
            let i = 0;
            while (i < sidebarItems.length) {
              const item = sidebarItems[i];
              if(item.type === 'category') {
                sidebarItems.splice(i, 1, ...item.items);
              } else {
                i += 1;
              }
            }
            return sidebarItems;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
