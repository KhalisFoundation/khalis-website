import * as React from "react";
import Seo from '../../components/SEO'
import Image from "next/image";
import google from "../../components/img/googlestoreicon.png";
import apple from "../../components/img/apple-app-store-icon.png";
import amazon from "../../components/img/amazonappstore.png";

const Apps = (props) => {

  return (
    <>
      <Seo title="Sundar Gutka" />
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 pt-5 has-text-left has-text-weight-bold">
              SUNDAR GUTKA{" "}
            </h1>
            <div className="columns is-centered py-6">
              <div className="column is-full">
                <div className=" px-0 pb-0">
                  <p className="has-text-weight-bold">Description</p>

                  <p>
                    Khalsa Sundar Gutka contains the daily and extended Sikh
                    Prayers also known as Nitnem. The Sikh prayers are known as
                    Gurbani and were written by the ten Sikh Gurus.
                  </p>
                  <p>
                    Please respectfully cover your head and remove your shoes
                    when using this app.
                  </p>

                  <p className="has-text-weight-bold">Features:</p>
                  <ul>
                    <li className="list-item">
                      * Larivaar optionSelect Bani length (effects Aarti,
                      Rehras, Chaupai and Kirtan Sohila)Romanized option
                    </li>
                    <li className="list-item">* Larivaar option</li>
                    <li className="list-item">* Auto-scroll</li>
                    <li className="list-item">* Romanized option</li>
                    <li className="list-item">* Rearrange indexes</li>
                    <li className="list-item">* Font size and type</li>
                    <li className="list-item">* Background Colors</li>
                    <li className="list-item">* Manglacharan Positions</li>
                    <li className="list-item">* Bookmarks</li>
                    <li className="list-item">
                      * Airplane mode on in-app (only in Android up to version
                      4.2)
                    </li>
                    <li className="list-item">* Stay awake in-app option</li>
                    <li className="list-item">
                      * Optimized for tablets and phones
                    </li>
                    <li className="list-item">* and much more…</li>
                  </ul>
                  <p>
                    We welcome any and all suggestions, corrections and
                    comments! We are here to do your seva. Please visit
                    khalisfoundation.org/#contact
                  </p>
                  <p>
                    This Sundar Gutka was originally modeled after the Buddha
                    Dal Sundar Gutka, but now includes much more. Banis are the
                    same as Taksal Sundar Gutka if Bani length setting is set to
                    medium (except Aarti).
                  </p>
                </div>
                <div className="is-flex is-flex-direction-column	 py-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.WahegurooNetwork.SundarGutka&hl=en"
                    className="py-1"
                  >
                    <Image
                      src={google}
                      width={180}
                      height={50}
                    />
                  </a>
                  <a
                    href="https://itunes.apple.com/us/app/sundar-gutka/id431446112"
                    className="py-1"
                  >
                    <Image
                      src={apple}
                      width={180}
                      height={50}
                    />
                  </a>
                  <a
                    href="https://www.amazon.com/Waheguroo-Network-Sundar-Gutka/dp/B006CWWS46"
                    className="py-1"
                  >
                    <Image
                      src={amazon}
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


