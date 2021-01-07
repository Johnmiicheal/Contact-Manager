import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="jdoe@gmail.com"
            phone="555-555-5555"
          />

          <Contact
            name="Karen Smith"
            email="karensmith1987@gmail.com"
            phone="343-334-3434"
          />

          <Contact
            name="Henry Joseph"
            email="bigjoe96@gmail.com"
            phone="122-002-2211"
          />
        </div>
      </div>
    );
  }
}

export default App;
