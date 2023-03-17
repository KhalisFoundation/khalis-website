import * as React from "react";
import Image from "next/image"
import zapier from "../components/img/zapier-logo.png";
import SEO from "../components/SEO";

const Privacy = () => {

  return (
    <>
      <SEO title="Sponsors" />
      <div className="section section--gradient">
        <section className="hero ">
          <div className=" py-4 px-4">
            <h1 className="is-size-1 py-6  has-text-weight-bold">
              SPONSORS AND THANKS
            </h1>


            <Image src={zapier} className="px-4" width={300} height={120}/>
            <p><a className="px-4 has-text-primary" href="http://www.zapier.com">http://www.zapier.com</a> – Helps us to integrate our backend services in order to work smarter.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;

