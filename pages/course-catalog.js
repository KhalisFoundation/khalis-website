import Link from "next/link";
import * as React from "react";
import SEO from "../components/SEO";

const Apps = (props) => {
  return (
    <>
      <SEO title="Course Catalog" />
      <div className="section section--gradient">
        <section className="hero ">
          <div className="container py-4 px-4">
            <h1 className="is-size-1 py-4 has-text-weight-bold">
              Course Catalog
            </h1>
            <p className="is-size-5 py-3 has-text-weight-bold">
              As part of our education initiative, we are now offering courses
              related to Sikh learning. This enables educated instructors from
              around the world to share their knowledge on our platform and
              reach those wanting to learn wherever they may be located. Select
              a course below to begin.
            </p>
            <p>
              Interested in offering a course through Khalis Foundation?
              <Link className="has-text-primary" href="/#contact/">Click here</Link> to
              contact us.
            </p>
            <p>
              <strong>Note:</strong> The opinions expressed by the instructors
              are their own and do not necessarily represent the views of the
              Khalis Foundation.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Apps;
