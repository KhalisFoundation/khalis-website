import * as React from "react";
import Layout from "../../components/Layout";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

const Apps = (props) => {
  const title = props.data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={title} />
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 py-6 has-text-centered has-text-weight-bold">
              MARYADA{" "}
            </h1>
            <div class="columns is-centered py-4">
              <div class="column is-full">
                <div className=" px-0 pb-0">
                  <p className="is-size-3 has-text-weight-bold">Description</p>

                  <p>
                    The Sikh Rehat Maryada is a code of conduct for Sikhs. The
                    app has both a gurmukhi (punjabi) and English version of the
                    most current rehat maryada.
                  </p>
                  <p>
                    This document was preceded by the Gurdwaras Act of 1925,
                    which laid down the definition of a Sikh. In 1915 and later
                    in 1931, attempts were made to create a modern standard
                    rehat (“code”). In 1950 the current Sikh Rehat Maryada was
                    produced based upon the work of Sikh scholars, seeking to
                    better standardise Sikh practices throughout the
                    international community.
                  </p>

                  <p className="has-text-weight-bold">Features:</p>
                  <ul>
                    <li className="list-item">
                      * Read the entire Rehat Maryada in two languages: Punjabi
                      or English
                    </li>
                    <li className="list-item">
                      * Set up with sections to easily navigate and find exactly
                      what you’re looking for
                    </li>
                    <li className="list-item">* Search</li>
                  </ul>
                </div>
                <div className="is-flex is-flex-direction-column	 py-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.waheguroonetwork.maryada"
                    className="py-2"
                  >
                    <StaticImage
                      src="../../img/Google-Play-Badge.avif"
                      width={180}
                      height={50}
                    />
                  </a>
                  <a
                    href="https://itunes.apple.com/nz/app/maryada/id673519589?mt=8"
                    className="py-2"
                  >
                    <StaticImage
                      src="../../img/appleappstore.png"
                      width={180}
                      height={50}
                    />
                  </a>
                </div>
              </div>
            </div>
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
