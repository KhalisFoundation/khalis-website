import * as React from "react";
// import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Image from 'next/image'
import prabhdev from "../components/img/prabhdev.jpg";
import manjot from "../components/img/manjot.jpg";
import taranjit from "../components/img/taranjit.jpg";
import balwinder from "../components/img/balwinder-kaur-headshot-scaled.jpg";
import aman from "../components/img/aman.jpg";

const Apps = () => {
  return (
    <>
      <Seo title="Board of Directors"/>
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 py-6 has-text-centered has-text-weight-bold">
              BOARD OF DIRECTORS
            </h1>


            <div className="columns is-centered py-4">
              <div className="column is-one-third">
                <div className="card ">
                  <div className="card-image">
                    <Image src={prabhdev} width={420} height={400} />
                  </div>
                  <div className="card-content ">
                    <div className="media has-background-black radius">
                      <div className="media-content">
                        <div className="">
                          <p className="is-size-5 py-1 has-text-weight-bold has-text-centered has-text-light">
                            Prabhdev Singh
                          </p>
                          <p className="px-4 subtitle py-3 is-6 has-text-light has-text-centered	has-text-weight-bold">
                            Prabhdev Singh has Management and IT degrees and is
                            overseeing many Khalis Foundation functions. He is
                            currently working for a top IT company as a Director
                            of Products and is involved in many Sikh community
                            projects. He is also an advisor for the Vigitrust
                            Board which brings together cyber security /
                            compliance professionals across the globe to discuss
                            emerging trends and technologies.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" px-0 pb-0">
                      <p className="has-text-centered">
                        ਡਗਮਗਛਾਡਿਰੇਮਨਬਉਰਾ॥ <br />
                        Stop your wavering, O crazy people!
                      </p>
                      <p> - Raag Gauree p338 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="card ">
                  <div className="card-image">
                    <Image src={manjot} width={420} height={400} />
                  </div>
                  <div className="card-content ">
                    <div className="media has-background-black radius">
                      <div className="media-content">
                        <div className="">
                          <p className="is-size-5 py-1 has-text-weight-bold has-text-centered has-text-light">
                            Manjot Singh
                          </p>
                          <p className="px-4 subtitle py-3 is-6 has-text-light has-text-centered	has-text-weight-bold">
                            Co-Founder of Khalis, Manjot Singh is a Director by
                            profession at a major international software
                            company. His vision and dedication to spreading
                            Sikhi through technology has helped build the
                            organization into what it is today.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" px-0 pb-0">
                      <p className="has-text-centered">
                        ਗੁਰਪ੍ਰਸਾਦਿ <br />
                        By Guru&apos;s Grace.
                      </p>
                      <p> – Mool Mantr p1</p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="column is-one-third">
                <div className="card ">
                  <div className="card-image">
                    <Image src={taranjit}  width={420} height={400}/>
                  </div>
                  <div className="card-content ">
                    <div className="media has-background-black radius">
                      <div className="media-content">
                        <div className="">
                          <p className="is-size-5 py-1 has-text-weight-bold has-text-centered has-text-light">
                            Taranjit Singh
                          </p>
                          <p className="px-4 subtitle py-3 is-6 has-text-light has-text-centered	has-text-weight-bold">
                            Taranjit Singh is a Software Engineer with a
                            Master&apos;s degree in computer science. He is a
                            proponent for learning and building accessible
                            software. He brings several years of experience
                            working for technology companies.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" px-0 pb-0">
                      <p className="has-text-centered">
                        ਡਗਮਗਛਾਡਿਰੇਮਨਬਉਰਾ॥ <br />
                        Stop your wavering, O crazy people!
                      </p>
                      <p> - Raag Gauree p338 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-centered py-4">
              <div className="column is-one-third">
                <div className="card ">
                  <div className="card-image">
                    <Image src={balwinder}  width={420} height={400}/>
                  </div>
                  <div className="card-content ">
                    <div className="media has-background-black radius">
                      <div className="media-content">
                        <div className="">
                          <p className="is-size-5 py-1 has-text-weight-bold has-text-centered has-text-light">
                            Balwinder Kaur
                          </p>
                          <p className="px-4 subtitle py-3 is-6 has-text-light has-text-centered	has-text-weight-bold">
                            Balwinder Kaur is a passionate technologist, a
                            creative educator, a women-in-tech champion, and a
                            mother. She loves touching the hearts of young and
                            young-at-heart through immersive storytelling. She
                            currently leads Software Engineering at a Silicon
                            Valley Startup. She has a software engineering
                            degree from the Indian Institute of Technology.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" px-0 pb-0">
                      <p className="has-text-centered">
                        ਰੂਪ ਹੀਨ ਬੁਧਿ ਬਲ ਹੀਨੀ ਮੋਹਿ ਪਰਦੇਸਨਿ ਦੂਰ ਤੇ ਆਈ ॥੧॥ ਨਾਹਿਨ
                        ਦਰਬੁ ਨ ਜੋਬਨ ਮਾਤੀ ਮੋਹਿ ਅਨਾਥ ਕੀ ਕਰਹੁ ਸਮਾਈ ॥੨॥ I have no
                        beauty, understanding or strength; I am a stranger, from
                        far away. ||1|| I am not wealthy or youthful. I am an
                        orphan – please, unite me with Yourself. ||2||
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="card ">
                  <div className="card-image">
                    <Image src={aman} width={420} height={400} />
                  </div>
                  <div className="card-content ">
                    <div className="media has-background-black radius">
                      <div className="media-content">
                        <div className="">
                          <p className="is-size-5 py-1 has-text-weight-bold has-text-centered has-text-light">
                            Aman Singh
                          </p>
                          <p className="px-4 subtitle py-3 is-6 has-text-light has-text-centered	has-text-weight-bold">
                            Aman Singh is a senior software specialist by
                            profession and provides insights into marketing and
                            design as well as implementing technology for the
                            organization. He has been working on Sikh tech
                            projects for over two decades and actively organizes
                            Sikh events as well as doing bi-lingual Kirtan and
                            Katha divaans at Gurdwaras and other Sikhi camps.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" px-0 pb-0">
                      <p className="has-text-centered">
                        ਜੇ ਗੁਰੁ ਝਿੜਕੇ ਤ ਮੀਠਾ ਲਾਗੈ ਜੇ ਬਖਸੇ ਤ ਗੁਰ ਵਡਿਆਈ ॥੨੫॥ Even
                        if the Guru rebukes me, He still seems very sweet to me.
                        And if He actually forgives me, that is the Guru&apos;s
                        greatness. ||25||
                      </p>
                      <p> - Raag Soohee p757 </p>
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
