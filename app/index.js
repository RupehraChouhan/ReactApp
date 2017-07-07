var React = require('react');
var ReactDOM = require('react-dom');
import NavbarInstance  from './components/NavBar.js';
import JumbotronInstance from './components/Jumbotron.js';
import ScrollSpy from './components/Scrollspy.js';
var intro = "CS student at University of Alberta and former intern at Intuit";

ReactDOM.render(<NavbarInstance />, document.getElementById('navBar'));
ReactDOM.render(<JumbotronInstance intro={intro}/>, document.getElementById('jumbotron'));
// ReactDOM.render(<ScrollSpy />, document.getElementById('ScrollSpy'));
