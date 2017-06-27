var React = require('react');
var ReactDOM = require('react-dom');

//At first I thought that you cannot export and element...
//turns out you can..
const appElement = <p>This is an element. You can export them and they are immutable!</p>;

module.exports = appElement;
