import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
// Use the GatsbyImage component for Dynamic images (if the source changes for each component instance)
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// {nodeType.field}.js == special file name for Gatsby to create multiple pages/routes for each node in your GraphQL data layer
const BlogPost = ({ data, children }) => {
  // These unique page components have access to individual nodes in the data layer & have certain fields available like id, slug, etc.
  // Keys in props.pageContext are available to use as query variables in GraphiQL
  // console.log(props.pageContext);
  const frontmatter = data.mdx.frontmatter;

  const image = getImage(frontmatter.hero_image);
  return (
    <Layout pageTitle={frontmatter.title}>
      <p>{frontmatter.date}</p>
      {/* Pass in the image object & other props to GatsbyImage & render */}
      <GatsbyImage image={image} alt={frontmatter.hero_image_alt}></GatsbyImage>
      <p>
        Photo Credit:{" "}{/* This ensures there is a white space after the colon */}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt
    }
  }
`;

// data from query is ALSO available in Head component
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;
export default BlogPost;
