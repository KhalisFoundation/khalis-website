import React from "react";
import Link from "next/link";
import logo from "./img/khalis-logo-inv-hq.png";
import Image from "next/image";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active",
          })
          : this.setState({
            navBarActiveClass: "",
          });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top-mobile has-background-black"
        role="navigation"
        aria-label="main-navigation"
      >
        <div
          style={{
            maxWidth: "96%",
          }}
          className="container"
        >
          <div className="navbar-brand">
            <Link href="/" className="navbar-item">
              <Image
                src={logo}
                alt="Khalis Foundation"
                // style={{ width: "100px", height: "40px" }}
                width={100}
                height={140}
              />
              {/* <span className="has-text-primary body-text ml-2 has-text-centered">
                Surprise Gift Blog
              </span> */}
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="button"
              tabIndex={0}

            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
              }}>
                <button className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  onKeyPress={() => this.toggleHamburger()}
                  onClick={() => this.toggleHamburger()}>
                  <span />
                  <span />
                  <span />

                </button>
                <Link
                className="navbar-item is-family-secondary nav-item has-text-light p-0"
                href="/donate"
              >
                <p className="btn is-primary  ">  Donate</p>
              
              </Link>
              </div>

            </div>

          </div>
          <div
            id="navMenu "
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered has-shadow">
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light "
                href="/"
              >
                HOME
              </Link>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light "
                href="/#about"
              >
                ABOUT
              </Link>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                href="/#spotlight"
              >
                SPOTLIGHT
              </Link>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                href="/#recent"
              >
                RECENT
              </Link>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                href="/#contact"
              >
                CONTACT
              </Link>
              <div className="navbar-item has-dropdown is-hoverable " style={{
                fontSize: "14px",
              }}>
                <p className="navbar-link is-family-secondary has-text-light has-text-weight-bold">
                  PROJECTS
                </p>

                <div className="navbar-dropdown has-background-black">
                  <Link
                    href="/apps"
                    className="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "700",
                      paddingTop: "0.4rem !important",
                    }}
                  >
                    OUR APPS
                  </Link>
                  <Link
                    href="/sites"
                    className="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "700",
                      paddingTop: "0.4rem !important",
                    }}
                  >
                    SITES
                  </Link>
                  <Link
                    href="/course-catalog"
                    className="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "700",
                      paddingTop: "0.4rem !important",
                    }}
                  >
                    COURSES
                  </Link>
                </div>
              </div>

              <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                href="https://shop.khal.is/"
              >
                SHOP
              </Link>
              <div className="navbar-item has-dropdown is-hoverable " style={{
                fontSize: "14px",
              }}>
                <p className="navbar-link is-family-secondary has-text-light has-text-weight-bold">
                  FOUNDATION
                </p>

                <div className="navbar-dropdown has-background-black">
                  <Link
                    href="/news"
                    className="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "700",
                      paddingTop: "0.4rem !important",
                    }}
                  >
                    NEWS
                  </Link>
                  <Link
                    href="/board-of-directors"
                    className="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "700",
                      paddingTop: "0.2rem",
                    }}
                  >
                    BOARD OF DIRECTORS
                  </Link>
                  <Link
                    href="/staff-volunteers"
                    className="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "700",
                      paddingTop: "0.2rem",
                    }}
                  >
                    STAFF | VOLUNTEERS
                  </Link>

                  <Link
                    href="/sponsors-and-thanks"
                    className="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "700",
                      paddingTop: "0.2rem",
                    }}
                  >
                    SPONSORS AND THANKS
                  </Link>
                </div>
              </div>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                href="/donate"
              >
                <p className="button is-primary  " style={{
                  borderRadius:"0px"
                }}>  Donate</p>
              
              </Link>
          
            </div>
          
          </div>
        </div>
        <span />
      </nav>
    );
  }
};

export default Navbar;
