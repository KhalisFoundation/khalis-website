import React, { useState, useEffect } from "react";
import Seo from "../components/SEO";
import Image from "next/image";
import Link from "next/link";
import SEO from "../components/SEO";
import books from "../components/img/books.svg";
import apps from "../components/img/apps.svg";
import sites from "../components/img/sites.svg";
import BaniDB from "../components/img/banidb-sq.png";
// import myfirst from "../components/img/myfirst1024x660.png";
// import amritkirtanf from "../components/img/amrit-kirtan-f.png";
// import sundergutka from "../components/img/sunder-gutka-f.png";
// import sikhiMax from "../components/img/sttmicon-1.png";
// import baalbodh from "../components/img/baalbodh-f-1.png";
// import learnlareevar from "../components/img/learnlareevar-f.png";
// import Maryada from "../components/img/Maryada.jpg";
// import MyPothi from "../components/img/MyPothi.jpg";
// import rightIcon from "../components/img/right-icon.svg";
import Projects from "../components/Projects";

export default function Home() {
  const [currentText, setCurrentText] = useState(0);
  const textArray = [
    "The idea is to reach out to today's Sikh youth and help them achieve purity and truthfulness in their lives.  ",
    ' "Khalis" meaning pure or truth, refers to the Sikh lifestyle of leading an honest and truthful life  ',
    "Khalis Foundation is dedicated to raising awareness of Sikh culture and lifestyle through various services such as media, apps and books.    ",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [textArray.length]);
  return (
    <>
      <SEO />
      <div className="section section--gradient">
        <section className="hero is-info is-fullheight">
          <div className="hero-body">
            <div className=" has-text-centered">
                <h1 className="title m-0 p-0">
                  OVER 20 YEARS OF SHARING SIKHI THROUGH TECHNOLOGY
                </h1>
                <Link className="button is-white is-outlined  is-large mt-6" href="/#about">
                  LEARN MORE
                </Link>
            </div>
          </div>
        </section>
        <section className="hero  has-background-info " >
          <div className="hero-body">
            <div className="container px-1 py-4">
              <div className="  is-centered py-4">
                <h1 className="is-size-2 has-text-weight-bold has-text-light  has-text-centered">
                  WHO WE ARE
                </h1>
                <div className="px-6 py-5" style={{
                }}>
                  {textArray.map((text, index) => (
                    <p
                      key={index}
                      className={`is-size-4 py-6 has-text-centered has-text-light is-italic		  px-4 is-5 ${
                        index === currentText ? "active" : "is-hidden	"
                      }`}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero has-background-light" id="about">
          <div className="container">
            <div className="columns features py-3 ">
              <div className="column is-4  mx-2">
                <div className="card is-shady has-background-primary">
                  <div
                    className="card-image"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      alt="Placeholder image"
                      width={150}
                      height={150}
                      src={apps}
                      className="modal-button"
                    />
                  </div>
                  <div className="card-content px-5 py-3">
                    <div className="content">
                      <h4 className="is-size-3 has-text-light">
                        {" "}
                        Download Apps
                      </h4>
                      <p className="is-size-5	has-text-light">
                        Khalis publishes multi-platform apps for Sikhs all
                        around the world to better connect with Gurbani.
                      </p>
                      <Link
                        href="/apps"
                        className="mr-3	button is-small is-black"
                      >
                        VIEW APPS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4 mx-2">
                <div className="card is-shady has-background-primary">
                  <div
                    className="card-image"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      alt="Placeholder image"
                      width={150}
                      height={150}
                      src={books}
                      className="modal-button"
                    />
                  </div>
                  <div className="card-content px-5 py-3">
                    <div className="content ">
                      <h4 className="is-size-3 has-text-light">
                        Read Our Books
                      </h4>
                      <p className="is-size-5	has-text-light">
                        In addition to Sikh technology, Khalis also publishes
                        unique Sikhi books beloved by children.
                      </p>
                      <Link
                        href="https://shop.khal.is/"
                        className="button is-small is-black"
                      >
                        SHOP BOOKS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4 mx-2">
                <div className="card is-shady has-background-primary">
                  <div
                    className="card-image"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      alt="Placeholder image"
                      width={150}
                      height={150}
                      src={sites}
                      className="modal-button"
                    />
                  </div>
                  <div className="card-content px-5 py-3">
                    <div className="content">
                      <h4 className="is-size-3 has-text-light">
                        Visit The Websites
                      </h4>
                      <p className="is-size-5	has-text-light">
                        Khalis also runs a number of successful websites that
                        inspire Sikh values in various ways.
                      </p>
                      {/* VIEW SITES */}
                      <Link
                        href="/sites/"
                        className="button is-small  is-black"
                      >
                        VIEW SITES
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero  has-background-info " id="spotlight">
          <div className="hero-body">
            <div className="container px-1">
              <div className="columns  is-vcentered">
                <div
                  data-aos="fade-left"
                  className="column is-half is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd  "
                >
                  {/* <figure className="image is-square"> */}
                  <Image src={BaniDB} width={280} height={280} />
                  {/* </figure> */}
                </div>
                <div
                  data-aos="fade-down"
                  className="column is-half is-10-mobile is-offset-1-mobile is-10-tablet  is-5-desktop  is-5-widescreen  is-5-fullhd "
                >
                  <h1 style={{lineHeight:"45px"}} className="is-size-2 pb-3 has-text-light has-text-weight-bold has-text-light">
                    PROJECT SPOTLIGHT
                  </h1>
                  <h2 className="is-size-5 py-5 has-text-light has-text-weight-light	">
                    The BaniDB API, developed by Khalis, provides a single
                    source of Gurbani for the next generation of Gurbani
                    applications and websites. We have developed the largest and
                    most accurate Gurbani database in the world.
                  </h2>
                  <a
                    className="button button-dark"
                    href="http://www.banidb.com/"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Projects />

        <section className="hero has-background-primary " id="contact">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="is-size-2 py-3 has-text-light has-text-weight-bold">
                Contact Us
              </h1>

              <div className="columns is-8  px-0 ">
                <div className="column is-two-third has-text-left">
                  <div className="field">
                    <label className="label has-text-light">Name</label>
                    <div className="control">
                      <input className="input is-medium" type="text" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label has-text-light">Email</label>
                    <div className="control">
                      <input className="input is-medium" type="text" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label has-text-light">Subject</label>
                    <div className="control">
                      <input className="input is-medium" type="text" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label has-text-light">Message</label>
                    <div className="control">
                      <textarea className="textarea is-medium"></textarea>
                    </div>
                  </div>
                  <div className="control">
                    <button
                      type="submit"
                      className="button is-dark has-text-weight-medium is-medium is-rounded"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="column is-one-thirds has-text-left">
                  <div className="contact-div">
                    <h1 className="is-size-4 has-text-weight-bold	has-text-light">
                      We want to hear from you
                    </h1>
                    <p className="is-size-5 has-text-light">
                      If you have a suggestion for an app or want to report a
                      bug, please let us know.
                    </p>
                  </div>
                  <div className="contact-div">
                    <h1 className="is-size-4 has-text-weight-bold	has-text-light">
                      Have any questions?
                    </h1>
                    <p className="is-size-5 has-text-light">
                      Want to know why something is the way it is? Drop us a
                      line!
                    </p>
                  </div>
                  <div className="contact-div">
                    <h1 className="is-size-4 has-text-weight-bold has-text-light	">
                      Address
                    </h1>
                    <p className="is-size-5 has-text-light">
                      Khalis Foundation <br />
                      142 N. Milpitas Blvd,
                      <br />
                      Ste. 276
                      <br />
                      Milpitas, CA 95035
                      <br />
                      United States
                    </p>
                  </div>
                  <div className="contact-div">
                    <h1 className="is-size-4 has-text-weight-bold	has-text-light">
                      Phone & WhatsApp
                    </h1>
                    <p className="is-size-5 has-text-light">
                      +1 (510) 394-0102
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
