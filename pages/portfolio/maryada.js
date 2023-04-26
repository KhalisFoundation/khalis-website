import * as React from "react";
import Seo from '../../components/SEO'
import Image from "next/image";
import google from "../../components/img/googlestoreicon.png";
import apple from "../../components/img/apple-app-store-icon.png";

const Apps = () => {

  return (
    <>
      <Seo title="Maryada" />
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 pt-5 has-text-left has-text-weight-bold">
              MARYADA{" "}
            </h1>
            <div className="columns is-centered py-6">
              <div className="column is-full">
                <div className=" px-0 pb-0">
                  <p className="is-size-3 has-text-weight-bold">Description</p>

                  <p>
                    The Sikh Rehat Maryada is a code of conduct for Sikhs. The
                    app has both a gurmukhi (punjabi) and English version of the
                    most current rehat maryada.
                  </p>
                  <p>
                    This document was preceded by the Gurdwaras Act of 1925,
                    which laid down the definition of a Sikh. In 1915 and later
                    in 1931, attempts were made to create a modern standard
                    rehat (“code”). In 1950 the current Sikh Rehat Maryada was
                    produced based upon the work of Sikh scholars, seeking to
                    better standardise Sikh practices throughout the
                    international community.
                  </p>

                  <p className="has-text-weight-bold">Features:</p>
                  <ul>
                    <li className="list-item">
                      * Read the entire Rehat Maryada in two languages: Punjabi
                      or English
                    </li>
                    <li className="list-item">
                      * Set up with sections to easily navigate and find exactly
                      what you’re looking for
                    </li>
                    <li className="list-item">* Search</li>
                  </ul>
                </div>
                <div className="is-flex is-flex-direction-column	 py-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.waheguroonetwork.maryada"
                    className="py-2"
                  >
                    <Image
                      src=
                      {google}
                      width={180}
                      height={50}
                    />
                  </a>
                  <a
                    href="https://itunes.apple.com/nz/app/maryada/id673519589?mt=8"
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

