import React from "react";
import { Link } from "gatsby";
import logo from "../img/khalis-logo-inv-hq.webp";

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
            <Link to="/" className="navbar-item">
              <img
                src={logo}
                alt="Surprise Gift Blog"
                style={{ width: "100px", height: "40px" }}
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
                to="/"
              >
                HOME
              </Link>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light "
                to="#about"
              >
                ABOUT
              </Link>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                to="#spotlight"
              >
                SPOTLIGHT
              </Link>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                to="#recent"
              >
                RECENT
              </Link>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                to="#contact"
              >
                CONTACT
              </Link>
              {/* <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                to="#"
              > */}
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                    Overview
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                    Modifiers
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Columns
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    Layout
                  </a>
                  <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                    Components
                  </a>
                </div>
              {/* </Link> */}
              {/* <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Docs
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    Overview
                  </a>
                  <a class="navbar-item">
                    Elements
                  </a>
                  <a class="navbar-item">
                    Components
                  </a>
                  <hr class="navbar-divider" />
                  <div class="navbar-item">
                    Version 0.9.4
                  </div>
                </div>
              </div> */}
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light"
                to="https://shop.khal.is/"
              >
                SHOP
              </Link>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-light "
                to="#foundation"
              >
                FOUNDATION
              </Link>

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
