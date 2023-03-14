import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="section"        >
          <h1 className="has-text-weight-bold is-size-1 has-text-centered py-3"          >
            News
          </h1>
        </div>
        <section className="section">
          <div className="container" style={{ maxWidth: "640px" }}>
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
