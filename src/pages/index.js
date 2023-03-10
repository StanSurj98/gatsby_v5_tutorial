import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src={"../images/clifford.jpeg"}
        alt={
          "Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        }
      />
    </Layout>
  );
};
// Write any valid <head> elements here
export const Head = () => <Seo title={"Home Page"} />;

export default IndexPage;
