var React = require('react');
var ReactDOM = require('react-dom');

//At first I thought that you cannot export and element...
//turns out you can..
const appElement = <div>
  <h1>Elements</h1>
  <p>This is an element. You can export them and they are immutable!</p>
  </div>;

module.exports = appElement;
