// Renamed from blog.js to index.js as it's in a the blog folder for the File System Route API
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }) => {
  const blogs = data.allMdx.nodes;
  // console.log(blogs);

  return (
    <Layout pageTitle={"My Blog Posts"}>
      {blogs.map((blog) => (
        <article key={blog.id}>
          <h2>
            <Link to={`/blog/${blog.frontmatter.slug}`}>{blog.frontmatter.title}</Link>
          </h2>
          <p>Posted: {blog.frontmatter.date}</p>
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
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title={"My Blog Posts"} />;

export default BlogPage;
