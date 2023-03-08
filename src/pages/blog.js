import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  const blogs = data.allMdx.nodes;
  console.log(blogs);

  return (
    <Layout pageTitle={"My Blog Posts"}>
      {blogs.map((blog) => (
        <article key={blog.id}>
          <h2>{blog.frontmatter.title}</h2>
          <p>Posted: {blog.frontmatter.date}</p>
          {blog.excerpt}
        </article>
      ))}
    </Layout>
  );
};

// Note in a page component, query is outside of the component
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title={"My Blog Posts"} />;

export default BlogPage;
