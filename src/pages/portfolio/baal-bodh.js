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
              BAAL BODH
            </h1>
            <div class="columns is-centered py-4">
              <div class="column is-full">
                <div className=" px-0 pb-0">
                  <p className="is-size-3 has-text-weight-bold">Description</p>

                  <p>
                    Baal Bodh teaches Punjabi to children using simple flash
                    cards with great artwork and sound.
                  </p>

                  <p className="has-text-weight-bold">
                    Currently included packs:
                  </p>
                  <ul>
                    <li className="list-item">* Colors</li>
                    <li className="list-item">* Gurus</li>
                    <li className="list-item">* Mool Mantar</li>
                    <li className="list-item">* Numbers</li>
                  </ul>

                  <p className="has-text-weight-bold">
                    Available via In-app Purchase:
                  </p>
                  <ul>
                    <li className="list-item">* Vegetables</li>
                    <li className="list-item">* Fruits</li>
                    <li className="list-item">* Animals</li>
                    <li className="list-item">* Body Parts</li>
                  </ul>
                  <p>All proceeds help to support our free gurbani apps.</p>
                  <p>
                    Special Thanks Dasvandh Network and Buffalo, New York sangat
                    for helping us to develop this app.
                  </p>
                </div>
                <div className="is-flex is-flex-direction-column	 py-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=org.khalisfoundation.baalbodh"
                    className="py-2"
                  >
                    <StaticImage
                      src="../../img/Google-Play-Badge.avif"
                      width={180}
                      height={50}
                    />
                  </a>
                  <a
                    href="https://itunes.apple.com/us/app/baal-bodh/id961465050?mt=8"
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
