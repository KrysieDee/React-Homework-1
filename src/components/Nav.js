import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/guilty'>Guilty</Link>
        <Link to='/happy'>Happy</Link>
        <Link to='/sleepy'>Sleepy</Link>
        </div>
    );
  }
}

export default Nav;
