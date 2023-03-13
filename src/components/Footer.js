import * as React from "react";
import { Link } from "gatsby";
import FooterLine from "./foot-heading";
// import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import tiktok from "../img/social/tiktok.svg";
import telegram from "../img/social/telegram.svg";
import rightIcon from "../img/right-icon.svg";
// import Olyetta from "../img/girlicon.svg";
// import SocialArrow from "../img/social-arrow.svg";

const Footer = () => {


  return (
    <footer className="footer has-background-dark has-text-white-ter">
      <div className="content has-text-centered has-text-white-ter">
        <div className="has-text-white-ter">
          <div className=" container content has-text-centered">
            <div class="columns is-centered" >
              <div class="column is-one-third">
                <div className="contact-div">
                  <h1 className=" px-6 is-size-4 has-text-weight-bold	has-text-light has-text-left">
                    OUR MISSION
                  </h1>
                  <p className="is-size-6 has-text-left px-6">
                    Khalis provides resources to Sikhs around the world through technology and media. Our goal is to serve and inspire the whole of humanity by spreading the teachings of our Gurus to the masses.
                  </p>
                </div>
              </div>
              <div class="column is-one-third">
                <div className="contact-div">
                  <h1 className="px-6 is-size-4 has-text-weight-bold	has-text-light has-text-left">
                    LEGAL                  </h1>
                  <div className="px-6" style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}>
                    <Link className="is-size-5 py-2  has-text-light is-flex is-align-items-center	" to="/disclaimer">
                      <img src={rightIcon} alt="tiktok" width={25} height={25}  />
                      Disclaimer
                    </Link>
                    <Link  className="is-size-5 py-2  has-text-light is-flex is-align-items-center	" to="/privacy-policy"> 
                     <img src={rightIcon} alt="tiktok" width={25} height={25}  /> Privacy Policy</Link>
                    <Link  className="is-size-5 py-2  has-text-light is-flex is-align-items-center	" to="/terms-of-service"> 
                     <img src={rightIcon} alt="tiktok" width={25} height={25}  />
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
              <div class="column is-one-third">
                <div className="container">
                  <p className="px-6 is-size-4 has-text-weight-bold	has-text-light has-text-left">
                    Social Media
                  </p>
                  <div className="is-flex is-align-items-center is-justify-content-flex-start	 px-6">
                    <Link
                      className="py-2 px-2"
                      title="facebook"
                      to="https://www.facebook.com/surprisingift"
                    >
                      <div className="is-flex is-flex-direction-row	is-align-items-center	">
                        <img src={facebook} alt="Facebook" width={50} height={50} />
                      </div>
                    </Link>
                    <Link
                      className="py-2 px-2"
                      title="instagram"
                      to="https://www.instagram.com/gifft.me/"
                    >
                      <div className="is-flex is-flex-direction-row	is-align-items-center	">
                        <img src={instagram} alt="instagram" width={50} height={50} />
                      </div>
                    </Link>
                    <Link
                      className="py-2 px-2"
                      title="telegram"
                      to="https://t.me/gifftme"
                    >
                      <div className="is-flex is-flex-direction-row	is-align-items-center	">
                        <img src={telegram} alt="Telegram" width={50} height={50} />
                      </div>
                    </Link>
                    <Link
                      className="py-2 px-2"
                      title="tiktok"
                      to="https://www.tiktok.com/@gifftme"
                    >
                      <div className="is-flex is-flex-direction-row	is-align-items-center	">
                        <img src={tiktok} alt="tiktok" width={50} height={50} />
                      </div>
                    </Link>
                  </div>


                </div>
              </div>

            </div>
          </div>
          {/* Social */}
          {/* <FooterLine title={"Social"} /> */}



          {/* Navigation */}
          {/* <div>
            <FooterLine title={"Navigation"} />
            <div className="container">
              <div className="footer-items">
                <Link
                  className="px-3 py-2 nav-item-footer "
                  to="/categories/articles"
                >
                  Articles
                </Link>

                <Link
                  className="px-3 py-2  nav-item-footer "
                  to="/categories/faq/"
                >
                  Frequently Asked Questions
                </Link>
                <Link
                  className="px-3 py-2  nav-item-footer "
                  to="/categories/top-quotes"
                >
                  Top Quotes
                </Link>
              </div>
            </div>
          </div> */}
          {/* Legal */}

          <div>
            <FooterLine title={"Made with love ❤️"} />
            <div className="container">
              <p className="body-text  pb-3 ">
                © {new Date().getFullYear()} Khalis Foundation, a registered California non-profit organization
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
