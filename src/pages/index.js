import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <li>
        <Link key={post.node.id} to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link>
      </li>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            published
            date
          }
        }
      }
    }
  }
`;

export default IndexPage;
