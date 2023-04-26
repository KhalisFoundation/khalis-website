import React, { useState } from "react";
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
import Image from "next/image";
import Link from "next/link";

function Project() {
  const [firstGutka, setfirstGutka] = useState(false);
  const [armitkeertan, setarmitkeertan] = useState(false);
  const [sundarGutka, setsundarGutka] = useState(false);
  const [SikhiMax, setsikhiMax] = useState(false);
  const [Baalbodh, setbaalbodh] = useState(false);

  const closeFirstGutka = () => setfirstGutka(false);
  const closearmitkeertan = () => setarmitkeertan(false);
  const closesundarGutka = () => setsundarGutka(false);
  const closeFsikhiMax = () => setsikhiMax(false);
  const closebaalbodh = () => setbaalbodh(false);

  return (
    <>
      <section className="section py-2" id="recent">
        <div className="container px-4 h-25">
          <div className="has-text-centered">
            <h2 className="is-size-2 py-3 has-text-dark has-text-weight-bold">
              RECENT PROJECTS
            </h2>

            <div className="columns py-0 my-0">
              <div className="column is-one-third px-0">
                <div className="container1">
                  <Image
                    src={myfirst}
                    alt="Avatar"
                    className="logo text"
                    width={500}
                    height={500}
                  />
                  <button
                    className="middle"
                    onClick={() => setfirstGutka(true)}
                  >
                    <div className="middlemiddle">
                      <div className="has-text-centered ">
                        <Image src={rightIcon} width={80} height={80} style={{
                          background:"#fff" ,
                          borderRadius:"50%"
                        }} />
                        <p className="is-size-3 has-text-weight-bold has-text-light">
                          My First Gutka
                        </p>
                      </div>
                    </div>
                  </button>
                  <div className={`modal ${firstGutka ? "is-active" : ""}`}>
                    <div
                      className="modal-background"
                      onClick={closeFirstGutka}
                    ></div>
                    <div className="modal-content has-background-light">
                      <Image
                        src={myfirst}
                        alt="Avatar"
                        className="logo text p-4"
                        width={500}
                        height={500}
                        // style={{ width: "100%" }}
                      />
                      <p className="is-size-3 px-6  has-text-dark has-text-left">
                        My First Gutka
                      </p>
                      <p className="is-size-5 has-text-left px-6">
                        This app uses beautiful, vibrant colors to display
                        Gurbani for kids and helps them learn how to read and
                        sing their Nitnem with built-in musical versions of
                        Baanis that they can follow along to.
                      </p>
                    </div>
                    <button
                      className="modal-close is-large"
                      aria-label="close"
                      onClick={closeFirstGutka}
                    ></button>
                  </div>
                </div>
              </div>
              <div className="column is-one-third px-0">
                <div className="container1">
                  <Image
                    src={amritkirtanf}
                    alt="Avatar"
                    className="logo text"
                    width={500}
                    height={500}
                  />
                  <button
                    className="middle"
                    onClick={() => setarmitkeertan(true)}
                  >
                    <div className="middlemiddle">
                      <div className="text-center ">
                        <Image src={rightIcon} width={80} height={80} style={{
                          background:"#fff" ,
                          borderRadius:"50%"
                        }} />
                        <p className="is-size-3 has-text-weight-bold has-text-light ">
                          Amrit Keertan
                        </p>
                      </div>{" "}
                    </div>
                  </button>
                  <div className={`modal ${armitkeertan ? "is-active" : ""}`}>
                    <div
                      className="modal-background"
                      onClick={closearmitkeertan}
                    ></div>
                    <div className="modal-content has-background-light">
                      <Image
                        src={amritkirtanf}
                        alt="Avatar"
                        className="logo text p-4"
                        width={500}
                        height={500}
                        // style={{ width: "100%" }}
                      />
                      <p className="is-size-3 px-6  has-text-dark has-text-left">
                        Amrit Keertan
                      </p>
                      <p className="is-size-5 has-text-left px-6">
                        Popular with professional Sikh Kirtani around the world,
                        the Amrit Keertan is a collection of Shabads from Sri
                        Guru Granth Sahib Jee, and other Sikh scriptures, most
                        commonly sung in Sikh congregations.
                      </p>
                    </div>
                    <button
                      className="modal-close is-large"
                      aria-label="close"
                      onClick={closearmitkeertan}
                    ></button>
                  </div>
                </div>
              </div>
              <div className="column is-one-third px-0">
                <div className="container1">
                  <Image
                    src={sundergutka}
                    height={500}
                    width={500}
                    alt="Avatar"
                    className="logo text"
                  />
                  <button
                    className="middle"
                    onClick={() => setsundarGutka(true)}
                  >
                    <div className="middlemiddle">
                      <div className="text-center ">
                        <Image src={rightIcon} width={80} height={80} style={{
                          background:"#fff" ,
                          borderRadius:"50%"
                        }} />
                        <p className="is-size-3 has-text-weight-bold has-text-light">
                          Sundar Gutka
                        </p>
                      </div>
                    </div>
                  </button>
                  <div className={`modal ${sundarGutka ? "is-active" : ""}`}>
                    <div
                      className="modal-background"
                      onClick={closesundarGutka}
                    ></div>
                    <div className="modal-content has-background-light">
                      <Image
                        src={sundergutka}
                        alt="Avatar"
                        className="logo text p-4"
                        width={800}
                        height={600}
                        // style={{ width: "100%" }}
                      />
                      <p className="is-size-3 px-6  has-text-dark has-text-left">
                        Sundar Gutka
                      </p>
                      <p className="is-size-5 has-text-left px-6">
                        Khalsa Sundar Gutka contains the daily and extended Sikh
                        Prayers also known as Nitnem.
                      </p>
                    </div>
                    <button
                      className="modal-close is-large"
                      aria-label="close"
                      onClick={closesundarGutka}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns py-0 my-0">
              <div className="column is-one-third px-0">
                <div className="container1">
                  <Image
                    src={sikhiMax}
                    width={500}
                    height={500}
                    alt="Avatar"
                    className="logo text"
                  />
                  <button className="middle" onClick={() => setsikhiMax(true)}>
                    <div className="middlemiddle">
                      <div className="text-center ">
                        <Image src={rightIcon} width={80} height={80} style={{
                          background:"#fff" ,
                          borderRadius:"50%"
                        }} />
                        <p className="is-size-3 has-text-weight-bold has-text-light">
                          SikhiToTheMax
                        </p>
                      </div>
                    </div>
                  </button>
                  <div className={`modal ${SikhiMax ? "is-active" : ""}`}>
                    <div
                      className="modal-background"
                      onClick={closeFsikhiMax}
                    ></div>
                    <div className="modal-content has-background-light">
                      <Image
                        src={sikhiMax}
                        alt="Avatar"
                        className="logo text p-4"
                        width={800}
                        height={600}
                        // style={{ width: "100%" }}
                      />
                      <p className="is-size-3 px-6  has-text-dark has-text-left">
                        SikhiToTheMax{" "}
                      </p>
                      <p className="is-size-5 has-text-left px-6">
                        SikhiToTheMax Everywhere is a revolutionary new Gurbani
                        presenter app that changes how Gurbani is experienced.
                      </p>
                    </div>
                    <button
                      className="modal-close is-large"
                      aria-label="close"
                      onClick={closeFsikhiMax}
                    ></button>
                  </div>
                </div>
              </div>
              <div className="column is-one-third px-0">
                <div className="container1">
                  <Image
                    width={500}
                    height={500}
                    src={baalbodh}
                    alt="Avatar"
                    className="logo text"
                  />
                  <button className="middle" onClick={() => setbaalbodh(true)}>
                    <div className="middlemiddle">
                      <div className="text-center ">
                        <Image src={rightIcon} width={80} height={80} style={{
                          background:"#fff" ,
                          borderRadius:"50%"
                        }} />
                        <p className="is-size-3 has-text-weight-bold has-text-light">
                          Baal Bodh
                        </p>
                      </div>
                    </div>
                  </button>
                  <div className={`modal ${Baalbodh ? "is-active" : ""}`}>
                    <div
                      className="modal-background"
                      onClick={closebaalbodh}
                    ></div>
                    <div className="modal-content has-background-light">
                      <Image
                        src={baalbodh}
                        alt="Avatar"
                        className="logo text p-4"
                        width={800}
                        height={600}
                        // style={{ width: "100%" }}
                      />
                      <p className="is-size-3 px-6  has-text-dark has-text-left">
                        Baal Bodh
                      </p>
                      <p className="is-size-5 has-text-left px-6">
                        Baal Bodh teaches Punjabi to children using simple flash
                        cards with great artwork and sound.
                      </p>
                    </div>
                    <button
                      className="modal-close is-large"
                      aria-label="close"
                      onClick={closebaalbodh}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container has-text-centered">
      <h2 className="is-size-1">RECENT PROJECTS</h2>
      <div className="columns is-centered" >
        <div className="column is-one-third px-0">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
                <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third px-0">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
                <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third px-0">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
                <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered" >
        <div className="column is-one-third px-0">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
                <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third px-0">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
                <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      </section>
    </>
  );
}

export default Project;
