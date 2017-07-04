var React = require('react');
var ReactDOM = require('react-dom');
import navbarInstance  from './components/NavBar.js';
import jumbotronInstance from './components/Jumbotron.js';


ReactDOM.render(navbarInstance, document.getElementById('navBar'));
ReactDOM.render(jumbotronInstance, document.getElementById('jumbotron'));
