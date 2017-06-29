var React = require('react');
var ReactDOM = require('react-dom');
// import {Panel} from 'react-bootstrap';

//At first I thought that you cannot export and element...
//turns out you can..


const appElement = (
  <div className="panel panel-default">
    <div className="panel-heading">Elements</div>
    <div className="panel-body">This is an element. You can export them and they are
       immutable!</div>
  </div>
);

module.exports = appElement;
