var React = require('react');
var ReactDOM = require('react-dom');
import navbarInstance  from './components/NavBar.js';
import JumbotronInstance from './components/Jumbotron.js';

var intro = "CS student at University of Alberta and former intern at Intuit";

ReactDOM.render(navbarInstance, document.getElementById('navBar'));
ReactDOM.render(<JumbotronInstance intro={intro}/>, document.getElementById('jumbotron'));
