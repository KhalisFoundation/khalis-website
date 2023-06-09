import * as React from "react";
import Seo from '../components/SEO'
import Image from "next/image"
import myfirst from "../components/img/myfirst1024x660.png";
import amritkirtanf from "../components/img/amrit-kirtan-f.png";
import sundergutka from "../components/img/sunder-gutka-f.png";
import sikhiMax from "../components/img/sttmicon-1.png";
import baalbodh from "../components/img/baalbodh-f-1.png";
import learnlareevar from "../components/img/learnlareevar-f.png";
import Maryada from "../components/img/Maryada.jpg";
import MyPothi from "../components/img/MyPothi.jpg";
import Link from "next/link";

const Apps = () => {
  return (
    <>
      <Seo title="Apps " />
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 pt-5 has-text-weight-bold">OUR APPS</h1>
            <p className="is-size-4 py-6">
              Khalis Foundation works on a number of Sikhi and educational apps.
            </p>
            <div className="columns is-centered">
              <div className="column is-one-forth">
                <div className="card">
                  <div className="card-image">
                    <Image src={myfirst} width={420} height={250}/>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content px-2 py-2">
                        <p className="is-size-5 is-4 has-text-weight-bold ">
                          My First Gutka
                        </p>
                        <p className="subtitle is-6">
                          This app uses beautiful, vibrant colors to display
                          Gurbani for kids and helps them learn how to read and
                          sing their Nitnem with built-in musical versions of
                          Baanis that they can follow along to.
                        </p>
                        <Link
                          className="button is-link"
                          href="/portfolio/my-first-gutka/"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-forth">
                <div className="card">
                  <div className="card-image">
                    <Image src={amritkirtanf} width={420} height={250} />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content px-2 py-2">
                        <p className="is-size-5 is-4 has-text-weight-bold">
                          Amrit Keertan
                        </p>
                        <p className="subtitle is-6">
                          Popular with professional Sikh Kirtani around the
                          world, the Amrit Keertan is a collection of Shabads
                          from Sri Guru Granth Sahib Jee, and other Sikh
                          scriptures, most commonly sung in Sikh congregations.
                        </p>
                        <Link
                          className="button is-link"
                          href="/portfolio/amrit-keertan"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-forth">
                <div className="card">
                  <div className="card-image">
                    <Image src={sundergutka} width={420} height={250} />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content px-2 py-2">
                        <p className="is-size-5 is-4 has-text-weight-bold">
                          Sundar Gutka{" "}
                        </p>
                        <p className="subtitle is-6">
                          Khalsa Sundar Gutka contains the daily and extended
                          Sikh Prayers also known as Nitnem.
                        </p>
                        <Link
                          className="button is-link"
                          href="/portfolio/sundar-gutka/"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-forth">
                <div className="card">
                  <div className="card-image">
                    <Image src={sikhiMax} width={420} height={250} />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content px-2 py-2">
                        <p className="is-size-5 is-4 has-text-weight-bold">
                          SikhiToTheMax
                        </p>
                        <p className="subtitle is-6">
                          SikhiToTheMax Everywhere is a revolutionary new
                          Gurbani presenter app that changes how Gurbani is
                          experienced.
                        </p>
                        <Link
                          className="button is-link"
                          href="/portfolio/sikhitothemax/"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-one-forth">
                <div className="card">
                  <div className="card-image">
                    <Image src={baalbodh} width={420} height={250} />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content px-2 py-2">
                        <p className="is-size-5 is-4 has-text-weight-bold">
                          Baal Bodh
                        </p>
                        <p className="subtitle is-6">
                          Baal Bodh teaches Punjabi to children using simple
                          flash cards with great artwork and sound.
                        </p>
                        <Link
                          className="button is-link"
                          href="/portfolio/baal-bodh/"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-forth">
                <div className="card">
                  <div className="card-image">
                    <Image src={learnlareevar} width={420} height={250} />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content px-2 py-2">
                        <p className="is-size-5 is-4 has-text-weight-bold">
                          Learn Larivaar
                        </p>
                        <p className="subtitle is-6">
                          When reading from Dhan Sri Guru Granth Sahib Ji
                          Maharaj in Larivaar Saroop, it can be challenging to
                          know where the Shabads are separated. With Learn
                          Larivaar, you can toggle back and forth between
                          assisted and unassisted views to get a helping hand.
                        </p>
                        <Link
                          className="button is-link"
                          href="/portfolio/learn-larivaar/"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-forth">
                <div className="card">
                  <div className="card-image">
                    <Image src={Maryada}  width={420} height={200}/>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content px-2 py-2">
                        <p className="is-size-5 is-4 has-text-weight-bold">
                          Maryada
                        </p>
                        <p className="subtitle is-6">
                          The Sikh Rehat Maryada is a code of conduct for Sikhs.
                          The app has both a gurmukhi (punjabi) and English
                          version of the most current rehat maryada.
                        </p>
                        <Link
                          className="button is-link"
                          href="/portfolio/maryada/"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-forth">
                <div className="card">
                  <div className="card-image">
                    <Image src={MyPothi} width={420} height={200}  />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content px-2 py-2">
                        <p className="is-size-5 is-4 has-text-weight-bold">
                          MyPothi
                        </p>
                        <p className="subtitle is-6">
                          MyPothi allows you to log on and create your own pothi
                          and arrange gurbani as you see fit–whether for daily
                          prayer, keertan or discussions. You create your pages
                          online and they automatically sync to your mobile
                          device.
                        </p>
                        <Link
                          className="button is-link"
                          href="/portfolio/mypothi/"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Apps;

