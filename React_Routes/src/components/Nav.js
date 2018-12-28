import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Happy from './Happy';
import Sleepy from './Sleepy';
import Guilty from './Guilty';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/' >Home</Link>
        <Link to='/happy' >Happy</Link>
        <Link to='/guilty' >Guilty</Link>
        <Link to='/sleepy' >Sleepy</Link>
      </div>
    );
  }
}

export default Nav;
