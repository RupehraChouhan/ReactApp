var React = require('react');
var ReactDOM = require('react-dom');
var appElement = require('./components/App');

ReactDOM.render(appElement, document.getElementById('element'));

//The only way to update the UI is to create a new element.
function tick() {
  const elem = (
    <div>
      <br />
      <p>The only way to update the UI is to create a new element.
        Put the element inside a function to create a component and
        then call the function otherwise it won't show!!</p>
      <h2>It is {new Date().toLocaleTimeString()}. </h2>
    </div>
  );
  ReactDOM.render(
    elem,
    document.getElementById('tick')
  );
}
function WelcomeComponent(props) {
  return (
    <div>
      <h1>Welcome, {pros.name}</h1>);
    </div>
  );
}
setInterval(tick, 1000);
