import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

// {nodeType.field}.js == special file name for Gatsby to create multiple pages/routes for each node in your GraphQL data layer
const BlogPost = ({ data, children }) => {
  // These unique page components have access to individual nodes in the data layer & have certain fields available like id, slug, etc.
  // Keys in props.pageContext are available to use as query variables in GraphiQL
  // console.log(props.pageContext);


  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

// Remember! GraphQL queries here are passed into the page component as props (props.data)
// Additionally, it recognizes the $id query variable immediately built into the page context
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      excerpt
    }
  }
`;

// data from query is ALSO available in Head component
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;
export default BlogPost;
