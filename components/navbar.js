import React from "react";
import Link from "next/link";
import logo from "./img/khalis-logo-inv-hq.png";
import Image from "next/image";

const Navbar = class extends React.Component {
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
                alt="Surprise Gift Blog"
                // style={{ width: "100px", height: "40px" }}
                width={140}
                height={180}
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
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
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
              <div class="navbar-item has-dropdown is-hoverable ">
                <a class="navbar-link is-family-secondary has-text-light has-text-weight-bold">
                  PROJECTS
                </a>

                <div class="navbar-dropdown has-background-black">
                  <a
                    href="/apps"
                    class="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "700",
                      paddingTop: "0.4rem !important",
                    }}
                  >
                    OUR APPS
                  </a>
                  <a
                    href="/sites"
                    class="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "700",
                      paddingTop: "0.4rem !important",
                    }}
                  >
                    SITES
                  </a>
                  <a
                    href="/course-catalog"
                    class="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "700",
                      paddingTop: "0.4rem !important",
                    }}
                  >
                    COURSES
                  </a>
                </div>
              </div>

              <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                href="https://shop.khal.is/"
              >
                SHOP
              </Link>
              <div class="navbar-item has-dropdown is-hoverable ">
                <a class="navbar-link is-family-secondary has-text-light has-text-weight-bold">
                  FOUNDATION
                </a>

                <div class="navbar-dropdown has-background-black">
                  <a
                    href="/blog"
                    class="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "700",
                      paddingTop: "0.4rem !important",
                    }}
                  >
                    NEWS
                  </a>
                  <a
                    href="/board-of-directors"
                    class="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "700",
                      paddingTop: "0.2rem",
                    }}
                  >
                    BOARD OF DIRECTORS
                  </a>
                  <a
                    href="/staff-volunteers"
                    class="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "700",
                      paddingTop: "0.2rem",
                    }}
                  >
                    STAFF | VOLUNTEERS
                  </a>

                  <a
                    href="/sponsors-and-thanks"
                    class="navbar-item is-family-secondary   "
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "700",
                      paddingTop: "0.2rem",
                    }}
                  >
                    SPONSORS AND THANKS
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-end has-text-centered ">
              <div className=" my-2">
                <a
                  href="/donate"
                  className="px-5 py-2 button is-primary is-rounded has-text-light"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
        <span />
      </nav>
    );
  }
};

export default Navbar;
