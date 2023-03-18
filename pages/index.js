import * as React from "react";
import Seo from '../components/SEO'
import Image from "next/image"
import Link from "next/link"
import SEO from '../components/SEO'
import books from "../components/img/books.svg";
import apps from "../components/img/apps.svg";
import sites from "../components/img/sites.svg";
import BaniDB from "../components/img/banidb-sq.png";
import myfirst from "../components/img/myfirst1024x660.png";
import amritkirtanf from "../components/img/amrit-kirtan-f.png";
import sundergutka from "../components/img/sunder-gutka-f.png";
import sikhiMax from "../components/img/sttmicon-1.png";
import baalbodh from "../components/img/baalbodh-f-1.png";
import learnlareevar from "../components/img/learnlareevar-f.png";
import Maryada from "../components/img/Maryada.jpg";
import MyPothi from "../components/img/MyPothi.jpg";
import rightIcon from "../components/img/right-icon.svg";

export default function Home() {
  return (<>
    <SEO title="Homepage" />
    <div className="section section--gradient">
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className=" ">
              <h1 className="title ">
                OVER 20 YEARS OF SHARING SIKHI THROUGH TECHNOLOGY
              </h1>
              <button className="button is-white is-outlined  is-large">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <Carousel>
          <div>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </section> */}
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
                    height={150}                  src={apps}

                    className="modal-button"
                  />
                </div>
                <div className="card-content px-5 py-3">
                  <div className="content">
                    <h4 className="is-size-3 has-text-light"> Download Apps</h4>
                    <p className="is-size-5	has-text-light">
                      Khalis publishes multi-platform apps for Sikhs all around
                      the world to better connect with Gurbani.
                    </p>
                    <Link href="/apps" className="mr-3	button is-small is-black">
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
                      Read Our Books{" "}
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
                    height={150}                src={sites}

                    className="modal-button"
                  />
                </div>
                <div className="card-content px-5 py-3">
                  <div className="content">
                    <h4 className="is-size-3 has-text-light">
                      Visit The Websites
                    </h4>
                    <p className="is-size-5	has-text-light">
                      {" "}
                      Khalis also runs a number of successful websites that
                      inspire Sikh values in various ways.
                    </p>
                    {/* VIEW SITES */}
                    <Link href="/sites/" className="button is-small  is-black">
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
                className="column is-half is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                {/* <figure className="image is-square"> */}
                <Image src={BaniDB} />
                {/* </figure> */}
              </div>
              <div
                data-aos="fade-down"
                className="column is-half is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-5-desktop  is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <h1 className="is-size-3 py-3 has-text-light has-text-weight-bold has-text-light">
                  PROJECT SPOTLIGHT
                </h1>
                <h2 className="is-size-6 py-2 has-text-light">
                  The BaniDB API, developed by Khalis, provides a single source
                  of Gurbani for the next generation of Gurbani applications and
                  websites. We have developed the largest and most accurate
                  Gurbani database in the world.
                </h2>
                <a className="button button-dark" href="http://www.banidb.com/">
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section py-2" id="recent">
        <div className="container px-4 h-25">
          <div className="has-text-centered">
            <h2 class="is-size-2 py-3 has-text-dark has-text-weight-bold">
              RECENT PROJECTS
            </h2>

            <div className="columns">
              <div className="column is-one-third">
                <div className="container1">
                  <Image
                    src={myfirst}
                    alt="Avatar"
                    className="logo text"
                    width={500}
                    height={500}
                  // style={{ width: "100%" }}
                  />
                  <div className="middle">
                    <div className="middlemiddle">
                      <div className="has-text-centered ">
                        <Link href="/portfolio/my-first-gutka/">
                      
                            <Image src={rightIcon}  width={50} height={50}/>
                            <p className="is-size-3 has-text-weight-bold has-text-light">
                              My First Gutka
                            </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="container1">
                  <Image
                    src={amritkirtanf}
                    alt="Avatar"
                    className="logo text"
                  />
                  <div className="middle">
                    <div className="middlemiddle">
                      <div className="text-center ">
                        <Link href="/portfolio/amrit-keertan">
                          <Image src={rightIcon}  width={50} height={50}/>
                            <p className="is-size-3 has-text-weight-bold has-text-light ">
                              Amrit Keertan
                            </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="container1">
                  <Image
                    src={sundergutka}
                    alt="Avatar"
                    className="logo text"
                  />
                  <div className="middle">
                    <div className="middlemiddle">
                      <div className="text-center ">
                        <Link href="/portfolio/sundar-gutka/">
                          <Image src={rightIcon}  width={50} height={50}/>
                            <p className="is-size-3 has-text-weight-bold has-text-light">
                              Sundar Gutka
                            </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third">
                <div className="container1">
                  <Image
                    src={sikhiMax}
                    width={500}
                    height={500}
                    alt="Avatar"
                    className="logo text"
                  // style={{ width: "100%" }}
                  />
                  <div className="middle">
                    <div className="middlemiddle">
                      <div className="text-center ">
                        <Link href="/portfolio/sikhitothemax/">
                          <Image src={rightIcon}  width={50} height={50}/>
                            <p className="is-size-3 has-text-weight-bold has-text-light">
                              SikhiToTheMax{" "}
                            </p>
                         
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="container1">
                  <Image
                   width={500}
                   height={500}
                    src={baalbodh}
                    alt="Avatar"
                    className="logo text"
                  // style={{ width: "100%" }}
                  />
                  <div className="middle">
                    <div className="middlemiddle">
                      <div className="text-center ">
                        <Link href="/portfolio/baal-bodh/">
                          <Image src={rightIcon}  width={50} height={50}/>
                            <p className="is-size-3 has-text-weight-bold has-text-light">
                              Baal Bodh{" "}
                            </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="container has-text-centered">
          <h2 class="is-size-1">RECENT PROJECTS</h2>
          <div class="columns is-centered" >
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-2by1">
                    <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-2by1">
                    <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-2by1">
                    <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-centered" >
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-2by1">
                    <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-2by1">
                    <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section class="hero has-background-primary " id="contact">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="is-size-2 py-3 has-text-light has-text-weight-bold">
              Contact Us
            </h1>

            <div class="columns is-8 is-variable ">
              <div class="column is-two-third has-text-left">
                <div class="field">
                  <label class="label has-text-light">Name</label>
                  <div class="control">
                    <input class="input is-medium" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label has-text-light">Email</label>
                  <div class="control">
                    <input class="input is-medium" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label has-text-light">Subject</label>
                  <div class="control">
                    <input class="input is-medium" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label has-text-light">Message</label>
                  <div class="control">
                    <textarea class="textarea is-medium"></textarea>
                  </div>
                </div>
                <div class="control">
                  <button
                    type="submit"
                    class="button is-dark has-text-weight-medium is-medium is-rounded"
                  >
                    Send Message
                  </button>
                </div>
              </div>
              <div class="column is-one-thirds has-text-left">
                <div className="contact-div">
                  <h1 className="is-size-4 has-text-weight-bold	has-text-light">
                    We want to hear from you
                  </h1>
                  <p className="is-size-5 has-text-light">
                    If you have a suggestion for an app or want to report a bug,
                    please let us know.
                  </p>
                </div>
                <div className="contact-div">
                  <h1 className="is-size-4 has-text-weight-bold	has-text-light">
                    Have any questions?
                  </h1>
                  <p className="is-size-5 has-text-light">
                    Want to know why something is the way it is? Drop us a line!
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
                  <p className="is-size-5 has-text-light">+1 (510) 394-0102</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </>

  )
}
