import * as React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

const Privacy = (props) => {
  const title = props.data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={title} />
      <div className="section section--gradient">
        <section className="hero ">
          <div className=" py-4 px-4">
            <h1 className="is-size-1 py-6  has-text-weight-bold">
              SPONSORS AND THANKS
            </h1>


            <StaticImage src="./../img/zapier-logo.avif" className="px-4" />
            <p><a className="px-4 has-text-primary" href="http://www.zapier.com">http://www.zapier.com</a> – Helps us to integrate our backend services in order to work smarter.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Privacy;

export const tagPageQuery = graphql`
  query Privacy {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
