const path = require('path')
const glob = require('glob')
const minimatch = require('minimatch')

const { createLoader } = require('simple-functional-loader')
const matter = require('gray-matter')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const fallbackDefaultExports = {
  'src/pages/decola/**/*': ['@/layouts/decola-layout', 'DecolaLayout']
}

module.exports = withBundleAnalyzer({
  async rewrites () {
    return glob.sync('*/*.mdx', { cwd: path.resolve(__dirname, 'src/pages/decola') })
      .map((file) => file.replace(/\.mdx$/, ''))
      .map((file) => ({
        source: `/decola/${file.replace(/^[^/]+\//, '')}`,
        destination: `/decola/${file}`
      }))
  },
  poweredByHeader: false,
  pageExtensions: ['mdx', 'tsx', 'ts'],
  webpack (config, options) {
    config.module.rules.push({
      test: { and: [/\.mdx/] },
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: []
          }
        },
        createLoader(function (source) {
          const result = matter(source)
          const pageData = result.data

          const extra = []
          const resourcePath = path.relative(__dirname, this.resourcePath)

          if (!/^\s*export\s+default\s+/m.test(source.replace(/```(.*?)```/gs, ''))) {
            for (const glob in fallbackDefaultExports) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `import { ${fallbackDefaultExports[glob][1]} as _Default } from '${fallbackDefaultExports[glob][0]}'`,
                  'export default _Default'
                )
                break
              }
            }
          }
          return [
            result.content,
            ...extra,
            `export const frontMatter = ${JSON.stringify(pageData)}`
          ].join('\n\n')
        })
      ]

    })

    return config
  }
})
