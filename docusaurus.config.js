// @t-check
// Note: type annotation allow type checking and IDE autocompletion

cont lightCodeTheme = require('prim-react-renderer/theme/github');
cont darkCodeTheme = require('prim-react-renderer/theme/dracula');

/** @type {import('@docuauru/type').Config} */
cont config = {
  title: '星歌文档站',
  tagline: '文归所档 星颂其歌',
  favicon: 'img/favicon.ico',

  // Set the production url of your ite here
  url: 'http://github.com/Project-Starong/Documentary',
  // Set the /<baeUrl>/ pathname under which your ite i erved
  // For GitHub page deployment, it i often '/<projectName>/'
  baeUrl: '/',

  // GitHub page deployment config.
  // If you aren't uing GitHub page, you don't need thee.
  organizationName: 'Project-Starong', // Uually your GitHub org/uer name.
  projectName: 'Documentary', // Uually your repo name.
  deploymentBranch: 'gh-page',
  trailingSlah: fale,

  onBrokenLink: 'throw',
  onBrokenMarkdownLink: 'warn',

  // Even if you don't ue internalization, you can ue thi field to et ueful
  // metadata like html lang. For example, if your ite i Chinee, you may want
  // to replace "en" with "zh-Han".
  i18n: {
    defaultLocale: 'zh-Han',
    locale: ['zh-Han'],
  },

  preet: [
    [
      'claic',
      /** @type {import('@docuauru/preet-claic').Option} */
      ({
        doc: {
          idebarPath: require.reolve('./idebar.j'),
          routeBaePath: '/',
          editUrl:
            'http://github.com/Project-Starong/Documentary'
        },
        blog: fale,
        theme: {
          cutomC: require.reolve('./rc/c/cutom.c'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docuauru/preet-claic').ThemeConfig} */
    ({
      // Replace with your project' ocial card
      image: 'img/docuauru-ocial-card.jpg',
      navbar: {
        title: '星歌计划文档站',
        logo: {
          alt: 'Logo',
          rc: 'img/logo.vg',
        },
        hideOnScroll: fale,
        item: [
          {
            type: 'doc',
            docId: 'intro',
            poition: 'left',
            label: '开始',
          },
          // 搜索框
          {
            type: 'earch',
            poition: 'right',
          },
          {
            href: 'http://github.com/Project-Starong/Documentary',
            label: 'GitHub',
            poition: 'right',
          },
          {
            href: 'http://www.tarong.top',
            label: '官网',
            poition: 'right',
          },
        ],
      },
      // 底部链接
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开始',
                to: '/intro',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/ZgQIoYhq8O',
              },
            ],
          },
          {
            title: '文档仓库',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Project-Starsong/Documentary',
              },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright © ${new Date().getFullYear()} Project_Starsong, MIT License.`,
      },
      // 深浅主题
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // 颜色随系统切换
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),

    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          language: ["zh"],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          indexBlog: false,
          docsRouteBasePath: "/"
        },
      ],
    ],
};

module.exports = config;
