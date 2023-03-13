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
                            OUR APPS
                        </h1>
                        <p className="is-size-4 py-3">Khalis Foundation works on a number of Sikhi and educational apps.

</p>
                        <div class="columns is-centered" >
                            <div class="column is-one-forth">
                                <div class="card">
                                    <div class="card-image">
                                        <StaticImage src='./../img/myfirstgutka.avif' />

                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="is-size-5 is-4 has-text-weight-bold">My First Gutka
                                                </p>
                                                <p class="subtitle is-6">This app uses beautiful, vibrant colors to display Gurbani for kids and helps them learn how to read and sing their Nitnem with built-in musical versions of Baanis that they can follow along to.
                                                </p>
                                                <a className="button is-link" href="portfolio/my-first-gutka/">Read More</a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class="column is-one-forth">
                                <div class="card">
                                    <div class="card-image">
                                        <StaticImage src='./../img/amrit-kirtan-f.avif' />

                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="is-size-5 is-4 has-text-weight-bold">Amrit Keertan
                                                </p>
                                                <p class="subtitle is-6">
                                                    Popular with professional Sikh Kirtani around the world, the Amrit Keertan is a collection of Shabads from Sri Guru Granth Sahib Jee, and other Sikh scriptures, most commonly sung in Sikh congregations.
                                                </p>
                                                <a className="button is-link" href="portfolio/my-first-gutka/">Read More</a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class="column is-one-forth">
                                <div class="card">
                                    <div class="card-image">
                                        <StaticImage src='./../img/amrit-kirtan-f.avif' />

                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="is-size-5 is-4 has-text-weight-bold">Sundar Gutka                                                </p>
                                                <p class="subtitle is-6">
                                                    Khalsa Sundar Gutka contains the daily and extended Sikh Prayers also known as Nitnem.
                                                </p>
                                                <a className="button is-link" href="portfolio/my-first-gutka/">Read More</a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class="column is-one-forth">
                                <div class="card">
                                    <div class="card-image">
                                        <StaticImage src='./../img/amrit-kirtan-f.avif' />

                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="is-size-5 is-4 has-text-weight-bold">SikhiToTheMax</p>
                                                <p class="subtitle is-6">
                                                    SikhiToTheMax Everywhere is a revolutionary new Gurbani presenter app that changes how Gurbani is experienced.
                                                </p>
                                                <a className="button is-link" href="portfolio/my-first-gutka/">Read More</a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="columns is-centered" >
                            <div class="column is-one-forth">
                                <div class="card">
                                    <div class="card-image">
                                        <StaticImage src='./../img/myfirstgutka.avif' />

                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="is-size-5 is-4 has-text-weight-bold">Baal Bodh
                                                </p>
                                                <p class="subtitle is-6">
                                                    Baal Bodh teaches Punjabi to children using simple flash cards with great artwork and sound.

                                                </p>
                                                <a className="button is-link" href="portfolio/my-first-gutka/">Read More</a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class="column is-one-forth">
                                <div class="card">
                                    <div class="card-image">
                                        <StaticImage src='./../img/amrit-kirtan-f.avif' />

                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="is-size-5 is-4 has-text-weight-bold">Learn Larivaar

                                                </p>
                                                <p class="subtitle is-6">
                                                    When reading from Dhan Sri Guru Granth Sahib Ji Maharaj in Larivaar Saroop, it can be challenging to know where the Shabads are separated. With Learn Larivaar, you can toggle back and forth between assisted and unassisted views to get a helping hand.

                                                </p>
                                                <a className="button is-link" href="portfolio/my-first-gutka/">Read More</a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class="column is-one-forth">
                                <div class="card">
                                    <div class="card-image">
                                        <StaticImage src='./../img/amrit-kirtan-f.avif' />

                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="is-size-5 is-4 has-text-weight-bold">Maryada                                             </p>
                                                <p class="subtitle is-6">
                                                    The Sikh Rehat Maryada is a code of conduct for Sikhs. The app has both a gurmukhi (punjabi) and English version of the most current rehat maryada.

                                                </p>
                                                <a className="button is-link" href="portfolio/my-first-gutka/">Read More</a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class="column is-one-forth">
                                <div class="card">
                                    <div class="card-image">
                                        <StaticImage src='./../img/amrit-kirtan-f.avif' />

                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="is-size-5 is-4 has-text-weight-bold">MyPothi</p>
                                                <p class="subtitle is-6">
                                                    MyPothi allows you to log on and create your own pothi and arrange gurbani as you see fit–whether for daily prayer, keertan or discussions. You create your pages online and they automatically sync to your mobile device.
                                                </p>
                                                <a className="button is-link" href="portfolio/my-first-gutka/">Read More</a>
                                            </div>
                                        </div>


                                    </div>
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