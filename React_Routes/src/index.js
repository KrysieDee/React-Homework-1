import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';
import Nav from './components/Nav';

// your code goes here
class Home extends Component{
  render(){
    return(
<BrowserRouter>
  <div>
    <Route  path="/" component={Nav}>Home</Route>
    <Route path="/happy" component={Happy}>Happy</Route>
    <Route path="/guilty" component={Guilty}>Guilty</Route>
    <Route path="/sleepy" component={Sleepy}>Sleepy</Route>
  </div>
</BrowserRouter>    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
