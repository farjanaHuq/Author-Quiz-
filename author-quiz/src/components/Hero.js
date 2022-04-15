import React, { Component } from "react";
import "../bootstrap.min.css";

class Hero extends Component {
  render() {
    return (
      <div className="row">
        <div className="jumbotron col-10 offset-1">
          <h1>Author Quiz</h1>
          <p>Select the book written by the author shown</p>
        </div>
      </div>
    );
  }
}

export default Hero;
