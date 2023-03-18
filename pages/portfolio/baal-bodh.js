import * as React from "react";
import Seo from '../../components/SEO'
import Image from "next/image";
import google from  "../../components/img/googlestoreicon.png";
import apple from  "../../components/img/apple-app-store-icon.png";


const Apps = () => {

  return (
    <>
      <Seo title="Baal Bodh"/>
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 pt-5 has-text-left has-text-weight-bold">
              BAAL BODH
            </h1>
            <div class="columns is-centered py-6">
              <div class="column is-full">
                <div className=" px-0 pb-0">
                  <p className="is-size-3 has-text-weight-bold">Description</p>

                  <p>
                    Baal Bodh teaches Punjabi to children using simple flash
                    cards with great artwork and sound.
                  </p>

                  <p className="has-text-weight-bold">
                    Currently included packs:
                  </p>
                  <ul>
                    <li className="list-item">* Colors</li>
                    <li className="list-item">* Gurus</li>
                    <li className="list-item">* Mool Mantar</li>
                    <li className="list-item">* Numbers</li>
                  </ul>

                  <p className="has-text-weight-bold">
                    Available via In-app Purchase:
                  </p>
                  <ul>
                    <li className="list-item">* Vegetables</li>
                    <li className="list-item">* Fruits</li>
                    <li className="list-item">* Animals</li>
                    <li className="list-item">* Body Parts</li>
                  </ul>
                  <p>All proceeds help to support our free gurbani apps.</p>
                  <p>
                    Special Thanks Dasvandh Network and Buffalo, New York sangat
                    for helping us to develop this app.
                  </p>
                </div>
                <div className="is-flex is-flex-direction-column	 py-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=org.khalisfoundation.baalbodh"
                    className="py-2"
                  >
                    <Image
                      src={google}
                      width={180}
                      height={50}
                    />
                  </a>
                  <a
                    href="https://itunes.apple.com/us/app/baal-bodh/id961465050?mt=8"
                    className="py-2"
                  >
                    <Image
                      src={apple}
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

