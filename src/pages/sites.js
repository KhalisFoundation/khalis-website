import * as React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const Apps = (props) => {
  const title = props.data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={title} />
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 py-4 has-text-weight-bold">
              SITES
            </h1>
            <div class="wpb_wrapper">
              <p>Khalis Foundation runs a number of successful websites that promote Sikhi in various ways.</p>
              <p><strong><a className="has-text-primary" href="http://www.sikhitothemax.org">SikhiToTheMax.org</a></strong> – The most-accurate and featured Gurbani search site in the world, that is powered by BaniDB. SikhiToTheMax was the first Gurbani search application on the internet and it’s desktop version, also developed by Khalis, is the most popular Gurbani presentation software.</p>
              <p><strong><a className="has-text-primary" href="http://www.sikhroots.com">SikhRoots.com</a></strong> – With one of the largest collections of Gurbani Kirtan online, the SikhRoots project has been going since the start of the century and we are proud to host and manage this unique website featuring free MP3 Kirtan audio downloads, katha, videos, literature and more.</p>
              <p><strong><a className="has-text-primary" href="http://www.sikhism101.com">Sikhism101</a></strong> – A comprehensive introduction to the Sikh faith and many aspects including philosophy, scriptures, lifestyle, gender equality and information on the Gurus and saints of Sikhi. Also available on the Universal Faith website,
                <a className="has-text-primary" href="http://www.universalfaith.net">UniversalFaith.net</a></p>
              <p><strong><a className="has-text-primary" href="http://www.keertan.net">Keertan.net</a></strong> – Sikh Multimedia Search Engine at
                <a className="has-text-primary" href="http://www.keertan.net/">Keertan.Net</a> – This website is absolutely one of a kind, comprising of a vast array of kirtan tracks from different styles of kirtan, in different file formats, by various raagees, jathas and sangat members from all over the world. The site also includes Gurbani ucharan (recital) and kathaa (interpretive discussion) from a wide selection of speakers!&nbsp; The kathaa is in both Punjabi and in English in order to reach the greatest amount of listeners.</p>
              <p><strong><a className="has-text-primary" href="http://www.vidhia.com">Vidhia</a> </strong>– Sikh literature, research and gurbani provided in pdf for reading online or on ereaders.</p>
              <p><strong><a className="has-text-primary" href="http://www.larivaar.com">Learn Larivaar</a> </strong>– When reading from Sri Guru Granth Sahib Ji in Larivaar Saroop, it can be challenging to know where the Shabads are separated. With Learn Larivaar, you can toggle back and forth between assisted and unassisted views to get a helping hand.</p>

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
