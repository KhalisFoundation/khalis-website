import * as React from "react";
import Seo from '../../components/SEO'
import Image from "next/image";
import myFirstGutka from  "../../components/img/myfirst1024x660.png";
import google from  "../../components/img/googlestoreicon.png";
import apple from  "../../components/img/apple-app-store-icon.png";


const Apps = () => {

  return (
    <>
      <Seo title="My First Gutka" />
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 pt-5 has-text-left has-text-weight-bold">
              MY FIRST GUTKA
            </h1>
            <div className="columns is-centered py-6">
              <div className="column is-half">
                <div className="card ">
                  <div className="card-image">
                    <Image src={myFirstGutka}/>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className=" px-0 pb-0">
                  <p>
                    The first ever Gutka for kids is now available on Android
                    and iOS stores. This app uses beautiful, vibrant colors to
                    display Gurbani for kids and helps them learn how to read
                    and sing their Nitnem with built-in musical versions of
                    Baanis that they can follow along to. More features are
                    consistently being added and updated to encourage youth and
                    adults to engage more with Gurbani and help keep up with
                    their daily prayers.
                  </p>
                  <p className="has-text-weight-bold">Features include:-</p>
                  <ol className="px-4">
                    <li className="list-item">
                      Sing-along feature to help kids learn and engage with
                      Nitnem.
                    </li>
                    <li className="list-item"> Pauri selection theme.</li>
                    <li className="list-item">
                      English transliteration &amp; Translations
                    </li>
                    <li className="list-item">Vishraams and Larivaar mode.</li>
                    <li className="list-item"> Light &amp; Dark themes.</li>
                  </ol>
                </div>
                <div className="is-flex py-3 ">
                  <a className="px-2" href="https://play.google.com/store/apps/details?id=com.KhalisFoundation.MyFirstGutka">
                    <Image
                      src={google}
                      width={160}
                      height={60}
                    />
                  </a>
                  <a  className="px-2" href="https://apps.apple.com/gb/app/my-first-gutka/id1488162729">
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

