var React = require('react');
var ReactDOM = require('react-dom');
var appElement = require('./components/App');

ReactDOM.render(appElement, document.getElementById('element'));

//The only way to update the UI is to create a new element.
function tick() {
  const elem = (
    <div>
      <p>The only way to update the UI is to create a new element.
        Put the element inside a function to create a component and
        then call the function otherwise it won't show!! Below is an
      example of updating UI.</p>
      <h3>It is {new Date().toLocaleTimeString()}. </h3>
    </div>
  );
  ReactDOM.render(
    elem,
    document.getElementById('tick')
  );
}
setInterval(tick, 1000);

function WelcomeComponent(props) {
  return (
    <div>
      <h1>Elements and Components</h1>
      <p>In addition to representing DOM tags, elements can also represent
      user-defined component. In the heading below, a component with prop
      name="Rupehra" was assigned to an element.</p>
      <h3>Welcome, {props.name}</h3>
    </div>
  );
}
const element = <WelcomeComponent name="Rupehra" />;
ReactDOM.render(
  element,
  document.getElementById('elementRepresentingComponent')
);

function SayHi(props) {
  return (<p> Hi {props.name}!</p>);
}

function CallSayHi() {
  return (
    <div>
      <h1>Composing Components</h1>
      <p>Components can refer to other components in the output. Below
      I am calling a component multiple times with different props.</p>
      <SayHi name="Qamar" />
      <SayHi name="Chaittali" />
      <SayHi name="Alison" />
    </div>
  );
}
ReactDOM.render(
  <CallSayHi />,
  document.getElementById('composingComponent')
);
