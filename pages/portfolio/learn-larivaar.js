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
              LEARN LARIVAAR
            </h1>
            <div class="columns is-centered py-4">
              <div class="column is-full">
                <div className=" px-0 pb-0">
                  <p className="is-size-3 has-text-weight-bold">Description</p>

                  <p>
                    When reading from Dhan Sri Guru Granth Sahib Ji Maharaj in
                    Larivaar Saroop, it can be challenging to know where the
                    Shabads are separated. With Learn Larivaar, you can toggle
                    back and forth between assisted and unassisted views to get
                    a helping hand.
                  </p>

                  <p className="has-text-weight-bold">Features include:</p>
                  <ul>
                    <li className="list-item">* Session continuation</li>
                    <li className="list-item">* Gurus</li>
                    <li className="list-item">* Swipe navigation</li>
                    <li className="list-item">* Dark mode</li>
                  </ul>
                </div>
                <div className="is-flex is-flex-direction-column	 py-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.cyfersystems.learnlarivaar"
                    className="py-2"
                  >
                    <StaticImage
                      src="../../img/Google-Play-Badge.avif"
                      width={180}
                      height={50}
                    />
                  </a>
                  <a
                    href="https://itunes.apple.com/us/app/learn-larivaar/id973741099?ls=1&mt=8"
                    className="py-2"
                  >
                    <StaticImage
                      src="../../img/appleappstore.png"
                      width={180}
                      height={50}
                    />
                  </a>
                  <a href="http://larivaar.com" className="py-2">
                    <StaticImage
                      src="../../img/webapp.avif"
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
