import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// Pretty much a copy of the first Head component from the IndexPage but now it's centralized for all pages
const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);


  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo;
