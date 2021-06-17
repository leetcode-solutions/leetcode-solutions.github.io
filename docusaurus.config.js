/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'leetcode solutions',
  tagline: 'practicing leetcode',
  url: 'https://duanwilliam.github.io',
  baseUrl: '/leetcode/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'duanwilliam', // Usually your GitHub org/user name.
  projectName: 'leetcode', // Usually your repo name.
  stylesheets: [
    {
      href: '/static/katex/katex.min.css',
      type: 'text/css',
    },
  ],
  plugins: [
    '@docusaurus/plugin-ideal-image',
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
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'index',
        },
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
              label: 'landing page',
              to: '/',
            },
            {
              label: 'index',
              to: '/docs/index',
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
          path: 'z_docs',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/duanwilliam/leetcode/edit/main',
          beforeDefaultRemarkPlugins:[
            require('./remark-plugin-code-subsuper'),
          ],
          remarkPlugins: [
            require('remark-math'),
            [require('docusaurus-remark-plugin-codetabs'), {
              sync: true,
              customLabels: {
                'python': 'Python3',
                'cpp': 'C++17',
              },
            }],
          ],
          rehypePlugins: [
            require('rehype-katex'),
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
