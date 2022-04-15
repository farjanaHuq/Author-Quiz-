import React, { Component } from "react";
import '../bootstrap.min.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="row">
        <div className="col-12">
          <p className="text-muted credit">
            All images are from{" "}
            <a href="http://commons.wikimedia.org/wiki/Main_Page">
              Wikemedia Commons
            </a>{" "}
            and are in the public domain
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
