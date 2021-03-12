const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/docs/',

  siteMetadata: {
    title: 'React Hooks 组件库',
    description: 'React Component UI',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [
          'readme.md',
          'changelog.md',
          'code_of_conduct.md',
          'contributing.md',
          'license.md',
        ],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/yadongzhao/Workspace/zhifou/tile-ui/.docz',
        base: '/docs/',
        source: './',
        'gatsby-root': null,
        files: ['./src/**/*.{md,markdown,mdx}'],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Hooks 组件库',
        description: 'React Component UI',
        host: 'localhost',
        port: 8888,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/yadongzhao/Workspace/zhifou/tile-ui',
          templates:
            '/Users/yadongzhao/Workspace/zhifou/tile-ui/node_modules/docz-core/dist/templates',
          docz: '/Users/yadongzhao/Workspace/zhifou/tile-ui/.docz',
          cache: '/Users/yadongzhao/Workspace/zhifou/tile-ui/.docz/.cache',
          app: '/Users/yadongzhao/Workspace/zhifou/tile-ui/.docz/app',
          appPackageJson:
            '/Users/yadongzhao/Workspace/zhifou/tile-ui/package.json',
          appTsConfig:
            '/Users/yadongzhao/Workspace/zhifou/tile-ui/tsconfig.json',
          gatsbyConfig:
            '/Users/yadongzhao/Workspace/zhifou/tile-ui/gatsby-config.js',
          gatsbyBrowser:
            '/Users/yadongzhao/Workspace/zhifou/tile-ui/gatsby-browser.js',
          gatsbyNode:
            '/Users/yadongzhao/Workspace/zhifou/tile-ui/gatsby-node.js',
          gatsbySSR: '/Users/yadongzhao/Workspace/zhifou/tile-ui/gatsby-ssr.js',
          importsJs:
            '/Users/yadongzhao/Workspace/zhifou/tile-ui/.docz/app/imports.js',
          rootJs:
            '/Users/yadongzhao/Workspace/zhifou/tile-ui/.docz/app/root.jsx',
          indexJs:
            '/Users/yadongzhao/Workspace/zhifou/tile-ui/.docz/app/index.jsx',
          indexHtml:
            '/Users/yadongzhao/Workspace/zhifou/tile-ui/.docz/app/index.html',
          db: '/Users/yadongzhao/Workspace/zhifou/tile-ui/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
