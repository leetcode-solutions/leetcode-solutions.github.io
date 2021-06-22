/** @type {import('@docusaurus/types').DocusaurusConfig} */
const baseUrl = '/leetcode/';
module.exports = {
  title: 'leetcode solutions',
  tagline: 'practicing leetcode',
  url: 'https://duanwilliam.github.io',
  baseUrl: `${baseUrl}`,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'duanwilliam', // Usually your GitHub org/user name.
  projectName: 'leetcode', // Usually your repo name.
  stylesheets: [
    {
      href: `${baseUrl}katex/katex.min.css`,
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
          href: 'https://github.com/duanwilliam/leetcode',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'idk',
          items: [
            {
              label: 'my website',
              to: 'https://duanwilliam.github.io',
            },
            {
              label: 'my github',
              to: 'https://github.com/duanwilliam',
            },
          ],
        },
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
              href: 'https://github.com/duanwilliam/leetcode',
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
            'https://github.com/duanwilliam/leetcode/edit/main',
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
              example: {
                ifmClass: 'secondary',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"></path></svg>',
              },
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
