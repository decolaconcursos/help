import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'

export const getStaticProps: GetStaticProps = async () => {
  // MDX text - can be from a local file, database, anywhere
  const source = '# Some text, with a component <Bold>Macedo</Bold>'
  const mdxSource = await serialize(source)

  return { props: { source: mdxSource } }
}

const TestPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ source }) => {
  return (
    <div>
      {source.frontmatter.title}
      <MDXRemote {...source} />
    </div>
  )
}

export default TestPage
