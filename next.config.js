const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  pageExtensions: ['mdx', 'tsx', 'ts']
})
