import * as React from "react";
import Seo from '../../components/SEO'
import Image from "next/image";
import google from "../../components/img/googlestoreicon.png";
import apple from "../../components/img/apple-app-store-icon.png";
import amazon from "../../components/img/amazonappstore.png";

const Apps = (props) => {

  return (
    <>
      <Seo title="MYPOTHI" />
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 pt-5 has-text-left has-text-weight-bold">
              MYPOTHI
            </h1>
            <div className="columns is-centered py-6">
              <div className="column is-full">
                <div className=" px-0 pb-0">
                  <p className="is-size-3 has-text-weight-bold">Description</p>

                  <p>
                    In the old days, Sikhs would study gurbani and write their
                    own gutkas (prayer books) and pothis (hymnals). Since the
                    advent of print media and technology, this art has been
                    slowly lost to many.
                  </p>
                  <p>
                    MyPothi allows you to log on and create your own pothi and
                    arrange gurbani as you see fit–whether for daily prayer,
                    keertan or discussions. You create your pages online and
                    they automatically sync to your mobile device.
                  </p>
                  <p>
                    Please respectfully cover your head and remove your shoes
                    when using this app.
                  </p>

                  <p className="has-text-weight-bold">Features:</p>
                  <ul>
                    <li className="list-item">
                      * Log onto website at MyPothi.com and create pothi pages,
                      search SikhiToTheMax Guru Granth Sahib, Dasam Granth
                      Sahib, and more within the editor or paste your own text.
                    </li>
                    <li className="list-item">* Nearly 100 fonts</li>
                    <li className="list-item">* Rearrange index</li>
                    <li className="list-item">* Font Size and type</li>
                    <li className="list-item">
                      * Can have airplane mode on in app (Android 4.1.2 and
                      below only)
                    </li>
                    <li className="list-item">* Stay awake in app option</li>
                    <li className="list-item">* More…</li>
                  </ul>
                  <p>
                    We welcome any and all suggestions, corrections and
                    comments! We are here to do your seva. Please direct
                    comments to{" "}
                    <a
                      className="has-text-primary"
                      href="https://www.google.com/url?q=http://www.DiscoverSikhi.com&amp;sa=D&amp;usg=AFQjCNEGEYkTA_U8cKBL6_KE922GosxC4g"
                      target="_blank"
                    >
                      http://www.DiscoverSikhi.com
                    </a>
                  </p>
                </div>
                <div className="is-flex is-flex-direction-column	 py-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.WahegurooNetwork.MyPothi"
                    className="py-2"
                  >
                    <Image
                      src={google}
                      width={180}
                      height={50}
                    />
                  </a>
                  <a
                    href="https://itunes.apple.com/us/app/mypothi/id579369896?mt=8"
                    className="py-2"
                  >
                    <Image
                      src={apple}
                      width={180}
                      height={50}
                    />
                  </a>
                  <a
                    href="http://www.amazon.com/Waheguroo-Network-MyPothi/dp/B009SEE9UG" className="py-2"
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

