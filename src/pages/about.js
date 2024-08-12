import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I'm the proud creator of this site.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Learn more about Joe, a passionate web developer." />
  </>
);

export default AboutPage;