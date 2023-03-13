import * as React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image"

const Apps = (props) => {
    const title = props.data.site.siteMetadata.title;

    return (
        <Layout>
            <Helmet title={title} />
            <div className="section section--gradient">
                <section className="hero ">
                    <div className="container py-4 px-4">
                        <h1 className="is-size-1 py-4 has-text-weight-bold">
                            Course Catalog
                        </h1>
                        <p className="is-size-5 py-3 has-text-weight-bold">
                            As part of our education initiative, we are now offering courses related to Sikh learning. This enables educated instructors from around the world to share their knowledge on our platform and reach those wanting to learn wherever they may be located. Select a course below to begin.

                        </p>
                        <p >Interested in offering a course through Khalis Foundation? <a href="https://khalisfoundation.org/contact/">Click here</a> to contact us.</p>
                        <p><strong>Note:</strong> The opinions expressed by the instructors are their own and do not necessarily represent the views of the Khalis Foundation.</p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Apps;

export const tagPageQuery = graphql`
  query Apps {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
