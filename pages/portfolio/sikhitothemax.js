import * as React from "react";
import Seo from '../../components/SEO'
import Image from "next/image";
import windows from "../../components/img/img_how_to_get_rid_of_windows_10_icon_from_your_taskbar_9334_orig.jpeg";
import youtube from "../../components/img/khalisTHUMB.jpg";
import sikhi1 from "../../components/img/main-screen.png";
import sikhi2 from "../../components/img/letters.png";
import sikhi3 from "../../components/img/themes.png";
import Sikhi from '../../components/img/STTM_Long-Logo.png'
const Apps = () => {

  return (
    <>
      <Seo title="SIKHITOTHEMAX" />
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-3 px-4">
            <h1 className="is-size-1 pt-6 has-text-left has-text-weight-bold">
              SIKHITOTHEMAX{" "}
            </h1>
            <div className="is-flex is-justify-content-center	 is-align-content-center	"            >
              <Image src={Sikhi} width={300} height={300}
              />
            </div>

            <p className="is-size-5 py-4 has-text-left has-text-weight-bold">
              The world’s most popular Gurbani presentation software.
            </p>
            <div class="columns is-centered py-3">
              <div class="column is-one-third">
                <div class="card ">
                  <div class="card-image">
                    <Image src={
                      sikhi1
                    } width={500} height={500} />
                    <p className="is-size-5 py-6 has-text-centered has-text-weight-bold">
                      Presenter mode
                    </p>
                  </div>
                  <div class="card-image">
                    <Image src={sikhi2} width={500} height={500} />
                    <p className="is-size-5 py-6 has-text-centered has-text-weight-bold">
                      Powerful search
                    </p>
                  </div>
                  <div class="card-image">
                    <Image src={sikhi3} width={500} height={500} />
                    <p className="is-size-5 py-6 has-text-centered has-text-weight-bold">
                      Beautiful themes
                    </p>
                  </div>
                </div>
              </div>
              <div class="column is-two-third">
                <div className=" px-0 pb-0">
                  <div
                    // style="vertical-align: text-top; width: 70.9163%; height: 380px; border: 0px !important;"
                    rowspan="3"
                  >
                    In the year 2000, SikhiToTheMax was first released to the
                    world which gave Gurdwaras the ability to project Gurbani
                    and translations on large projector screens, enabling sangat
                    (congregation) members to be able to recite Gurbani
                    confidently whilst understanding meanings. Khalis Foundation
                    has continued the work of this revolutionary app and is
                    continuously working to improve this much-loved software to
                    help more people access Gurbani across multiple devices, in
                    more locations, and with much more speed and accuracy. Here
                    are some of the features you can expect to see in our app:-
                    <p></p>
                    <ul className="px-4">
                      <li>
                        <strong>First-letter search</strong>: Search for Gurbani
                        by typing in the first letters of any line&nbsp;for
                        fast, accurate searching.
                      </li>
                      <li>
                        <strong>Extended or single screen</strong>: Whether you
                        are using extended screens or just a single one, the
                        settings are easy to use without distracting the Sangat.
                      </li>
                      <li>
                        <strong>Filters</strong>: Narrow down search results by
                        using filters such as sources. This helps to pinpoint
                        the exact Shabad you are looking for in less time.
                      </li>
                      <li>
                        <strong>On-screen keyboard</strong>: Can’t remember
                        which Gurmukhi key maps to the keys on your laptop
                        keyboard? No problem, our fast and simple to use
                        Gurmukhi keyboard can help you search Gurbani easily.
                      </li>
                      <li>
                        <strong>Accurate Gurbani</strong>: Powered by BaniDB,
                        SikhiToTheMax is undoubtedly the most accurate and
                        up-to-date Gurbani database in the world. Corrections
                        are continuously being done to further improve spellings
                        and translations.
                      </li>
                      <li>
                        <strong>Wildcard support</strong>: Type a * when you are
                        searching if you are unsure of a letter. See the Help
                        section for more info on this feature.
                      </li>
                      <li>
                        <strong>Auto-Update</strong>: No need to keep visiting
                        this site to update. When a new version is available,
                        the application asks you to proceed with automatic
                        updating. In addition, when a new version of the
                        database is available, the app automatically and quietly
                        updates in the background.
                      </li>
                      <li>
                        <strong>Next line</strong>: Easily display a preview of
                        the next line, useful in Kirtan programs to assist
                        Sangat in singing fast-paced Shabads.
                      </li>
                      <li>
                        <strong>Multiple sources</strong>: Search not only Sri
                        Guru Granth Sahib Jee, but Sri Dasam Granth Sahib, Bhai
                        Gurdas Jee’s Vaaran, Bhai Nand Lal Jee’s Vaaran, Amrit
                        Kirtan and more.
                      </li>
                      <li>
                        <strong>Bani Overlay</strong>: Broadcast your event on
                        Facebook, YouTube any other social media platform with
                        Gurbani and translations being overlaid on the screen in
                        realtime.
                      </li>
                      <li>
                        <strong>Wireless display</strong>: Use an inexpensive
                        Chromecast device to show Gurbani on screen – no more
                        messy wires.
                      </li>
                      <li>
                        <strong>Themes</strong>: There’s a beautifully developed
                        theme for every occasion. Choose from Baagi Blue to
                        Khalsa Orange or create your own with custom
                        backgrounds.
                      </li>
                      <li>
                        <strong>Larivaar Support</strong>: Get rid of spaces and
                        display Gurbani in how it was originally written in
                        larivaar.
                      </li>
                      <li>
                        <strong>Custom Slides</strong>: Insert Waheguru and
                        other popular slides or create your own with a custom
                        message to the Sangat.
                      </li>
                      <li>
                        … and <strong>much more</strong>!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="is-size-1 py-4 has-text-left has-text-weight-bold">
              Download Today
            </h1>
            <p className="is-size-5 py-2 has-text-left">
              <strong>IMPORTANT: You will need an internet connection</strong>
              on the laptop/PC you are installing the software on. This is
              required to download the latest version of the database. After the
              initial installation, internet connection is not needed but
              recommended to receive the latest version of the database. An
              offline installer will be made available soon.
            </p>
            <table className="table is-bordered">
              <tbody>
                <tr>
                  <td>
                    <Image
                      src={windows}
                      width={280}
                      height={240}
                    />
                  </td>
                  <td>64 bit</td>
                  <td>
                    <a
                      className="has-text-primary"
                      href="https://s3-us-west-2.amazonaws.com/sttm-releases/win-x64/SikhiToTheMaxSetup-9.1.0.exe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://releases.khalis.net/sttm/win-x64/latest
                    </a>{" "}
                    <br />
                    <em>(recommended for Windows 10 &amp; Windows 11)</em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image
                      src={windows}
                      width={280}
                      height={240}
                    />
                  </td>{" "}
                  <td>32 bit</td>
                  <td>
                    <a
                      className="has-text-primary"
                      href="http://releases.khalis.net/sttm/win-ia32/latest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://releases.khalis.net/sttm/win-ia32/latest
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image
                      src={windows}
                      width={280}
                      height={240}
                    />
                  </td>{" "}
                  <td>Win7</td>
                  <td>
                    <strong>Note:</strong> Windows 7 is no longer being
                    supported. The links below are for the final supported
                    version of SikhiToTheMax on Windows 7. You may experience
                    issues.<p></p>
                    <p>
                      <a
                        className="has-text-primary"
                        href="https://s3-us-west-2.amazonaws.com/sttm-releases/win-x64/SikhiToTheMaxSetup-7.5.0.exe"
                      >
                        Windows 7 – 64 bit
                      </a>
                    </p>
                    <p>
                      <a
                        className="has-text-primary"
                        href="https://s3-us-west-2.amazonaws.com/sttm-releases/win-ia32/SikhiToTheMaxSetup-7.5.0.exe"
                      >
                        Windows 7 – 32 bit
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image
                      src={windows}
                      width={280}
                      height={240}
                    />
                  </td>{" "}
                  <td>64 bit</td>
                  <td>
                    <strong>Note:</strong> When opening the file, you may get a
                    macOS security error. After downloading, you will need to
                    right-click the file and press “Open”. This will give you
                    the ability to proceed with the installation.
                    <br />
                    <em>
                      Please go to security settings once installed and click to
                      open the application incase you get a message saying that
                      app will not open. We are working to fix this issue in
                      future updates.
                    </em>{" "}
                    <br />
                    <a
                      className="has-text-primary"
                      href="http://releases.khalis.net/sttm/mac-x64/latest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://releases.khalis.net/sttm/mac-x64/latest
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Please report any issues with the application or Gurbani here:{" "}
              <a className="has-text-primary" href="http://sttm.co/feedback">
                SikhiToTheMax Bug Reports
              </a>
            </p>
            <h3 className="is-size-4 has-text-weight-bold">Are you a developer?</h3>
            <p>
              SikhiToTheMax is open source and we take pull requests! Help make
              SikhiToTheMax better by contributing code. You can find us on
              Github:{" "}
              <a className="has-text-primary"
                href="https://github.com/KhalisFoundation">
                https://github.com/KhalisFoundation
              </a>
            </p>
            <p>
              Khalis Foundation expresses special thanks to the
              Almighty-Waheguru, Sri Guru Granth Sahib Ji, and the Sangat,
              without whom this project could never continue. We would also like
              to thank SHARE Charity UK and their Sevadars for their years of
              hard work on the project, the BaniDB alliance, who have helped
              make SikhiToTheMax and other apps to be the most powerful and
              accurate. More information:{" "}
              <a className="has-text-primary"
                href="http://www.banidb.com">http://www.banidb.com</a>
            </p>
            <h3 className="is-size-4 has-text-weight-bold">SikhiToTheMax Tutorial</h3>
            <p>Learn everything about SikhiToTheMax in this tutorial video:</p>
            <a className="has-text-primary"
              href="https://youtu.be/3Bf87Jeo_mI">
              <Image
                src={youtube}
                width={420}
                height={320}
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Apps;

