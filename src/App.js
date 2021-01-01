import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';


import './App.css';



class App extends Component{
  render() {
    return(
      <div className="App">
        <Header branding="Contact Manager" />
        
        <Contact name="John Doe"
        email="jdoe@gmail.com" phone="555-555-5555" />

        <Contact name="Karen Smith" email="karensmith22@gmail.com" phone="343-334-3434" />

      </div>
    )
  }
}

export default App;
