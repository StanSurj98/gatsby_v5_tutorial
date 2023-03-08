import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

// {nodeType.field}.js == special file name for Gatsby to create multiple pages/routes for each node in your GraphQL data layer
const BlogPost = () => {
  return (
    <Layout pageTitle={"Singular Blog Posts"}>
      <p>Blog post content goes here eventually</p>
    </Layout>
  )
}

export const Head = () => <Seo title={"Singular Blog Posts"} />
export default BlogPost;