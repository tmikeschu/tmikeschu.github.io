// Libraries
import React, { Component } from 'react';

// Components
import Header from './Header.jsx';
import Footer from './Footer.jsx';

//  Styles
import '../stylesheets/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        { this.props.children }
      </div>
    );
  }
}
