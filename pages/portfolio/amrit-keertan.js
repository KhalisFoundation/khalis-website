import * as React from "react";
import Seo from '../../components/SEO'
import Image from "next/image";
import google from  "../../components/img/googlestoreicon.png";
import apple from  "../../components/img/apple-app-store-icon.png";



const Apps = () => {

  return (
    <>
      <Seo title="Amrit Keertan"/>
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 pt-5 has-text-left has-text-weight-bold">
              AMRIT KEERTAN
            </h1>
            <div class="columns is-centered py-6">
              <div class="column is-full">
                <div className=" px-0 pb-0">
                  <p>
                    Popular with professional Sikh Kirtanis around the world,
                    the Amrit Keertan is a collection of Shabads from Sri Guru
                    Granth Sahib Jee, and other Sikh scriptures, most commonly
                    sung in Sikh congregations.
                  </p>
                  <p>
                    The Amrit Keertan gives suggestions for Shabads to sing on
                    various different occasions that organized into themes and
                    categories.
                  </p>
                  <p>
                    We have tried to include many features to serve the most
                    sangat as possible. Please respectfully cover your head and
                    remove your shoes when using this app.
                  </p>
                  <p className="has-text-weight-bold">Features include:-</p>
                  <ul>
                    <li className="list-item">* Larivaar option</li>
                    <li className="list-item">* Romanized option</li>
                    <li className="list-item">* English Translations</li>
                    <li className="list-item">* Font size and type</li>
                    <li className="list-item">* Background Colors</li>
                    <li className="list-item">* Stay awake in app option</li>
                    <li className="list-item">
                      * Swipe left or right to browse shabads in a section
                    </li>
                    <li className="list-item">* Works on tablets and phones</li>
                    <li className="list-item">* More</li>
                  </ul>
                </div>
                <div className="is-flex py-3">
                  <a className="px-2" href="https://play.google.com/store/apps/details?id=com.KhalisFoundation.AmritKeertan&hl=en_US">
                    <Image
                      src={google}
                      width={160}
                      height={60}
                    />
                  </a>
                  <a className="px-2" href="https://itunes.apple.com/in/app/amrit-keertan/id1393849213?mt=8">
                    <Image 
                    src={apple}
                    width={175}
                      height={60}
                      layout='constrained'
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

