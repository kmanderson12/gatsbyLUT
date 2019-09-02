import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  //const post = data.markdownRemark;
  //TODO: get the layout consistent, no full reload/unmount
  return (
    <Layout>
      <Helmet>
        <title>Blog | {post.frontmatter.title}</title>
      </Helmet>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
