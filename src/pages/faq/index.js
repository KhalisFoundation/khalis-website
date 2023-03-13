import * as React from "react";
import Layout from "../../components/Layout";



export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }




  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Frequently Asked Questions</h1>
         
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
