import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  React.useEffect(() => {
    // console.log("effect ")
    window.sa_event =
      window.sa_event ||
      function () {
        var a = [].slice.call(arguments);
        window.sa_event.q
          ? window.sa_event.q.push(a)
          : (window.sa_event.q = [a]);
      };
  }, []);
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/cropped-khalis-fav.avif`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/cropped-khalis-fav.avif`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/cropped-khalis-fav.avif`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/cropped-khalis-fav.avif`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpeg`}
        />
      </Helmet>
      
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;