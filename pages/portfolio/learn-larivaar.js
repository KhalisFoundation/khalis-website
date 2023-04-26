import * as React from "react";
import Seo from '../../components/SEO'
import Image from "next/image";
import google from  "../../components/img/googlestoreicon.png";
import apple from  "../../components/img/apple-app-store-icon.png";
import webapp from  "../../components/img/webapp.png";


const Apps = (props) => {

  return (
    <>
      <Seo title="Learn Larivaal" />
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 pt-5 has-text-left has-text-weight-bold">
              LEARN LARIVAAR
            </h1>
            <div className="columns is-centered py-6">
              <div className="column is-full">
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
                    <Image
                      src={google}
                      width={180}
                      height={50}
                    />
                  </a>
                  <a
                    href="https://itunes.apple.com/us/app/learn-larivaar/id973741099?ls=1&mt=8"
                    className="py-2"
                  >
                    <Image
                      src={apple}
                      width={180}
                      height={50}
                    />
                  </a>
                  <a href="http://larivaar.com" className="py-2">
                    <Image
                      src={webapp}
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
    </>
  );
};

export default Apps;

