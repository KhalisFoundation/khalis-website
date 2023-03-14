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
              MY FIRST GUTKA
            </h1>
            <div class="columns is-centered py-4">
              <div class="column is-half">
                <div class="card ">
                  <div class="card-image">
                    <StaticImage src="./../img/myfirstgutka.avif" />
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div className=" px-0 pb-0">
                  <p>
                    The first ever Gutka for kids is now available on Android
                    and iOS stores. This app uses beautiful, vibrant colors to
                    display Gurbani for kids and helps them learn how to read
                    and sing their Nitnem with built-in musical versions of
                    Baanis that they can follow along to. More features are
                    consistently being added and updated to encourage youth and
                    adults to engage more with Gurbani and help keep up with
                    their daily prayers.
                  </p>
                  <p className="has-text-weight-bold">Features include:-</p>
                  <ol className="px-2">
                    <li className="list-item">
                      Sing-along feature to help kids learn and engage with
                      Nitnem.
                    </li>
                    <li className="list-item"> Pauri selection theme.</li>
                    <li className="list-item">
                      English transliteration &amp; Translations
                    </li>
                    <li className="list-item">Vishraams and Larivaar mode.</li>
                    <li className="list-item"> Light &amp; Dark themes.</li>
                  </ol>
                </div>
                <div className="is-flex py-3">
                  <a href="https://play.google.com/store/apps/details?id=com.KhalisFoundation.MyFirstGutka">
                    <StaticImage
                      src="../../img/googlestoreicon.png"
                      width={160}
                      height={60}
                    />
                  </a>
                  <a href="https://apps.apple.com/gb/app/my-first-gutka/id1488162729">
                    <StaticImage 
                    src="../../img/apple-app-store-icon.png"
                    width={175}
                      height={60}
                      layout='constrained'
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
