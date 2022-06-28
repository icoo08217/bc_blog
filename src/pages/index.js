import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dogimg.jpeg"
      />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;
