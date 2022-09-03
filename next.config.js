const path = require('path')
const glob = require('glob')

const { createLoader } = require('simple-functional-loader')
const matter = require('gray-matter')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

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
          return [
            result.content,
            `export const pageData = ${JSON.stringify(pageData)}`
          ].join('\n\n')
        })
      ]

    })

    return config
  }
})
