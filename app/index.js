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

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>State and Lifecycle</h1>
        <p>Components defined as classes have some additional features
        such as a 'state'. We assign the initial state in the class
      constructor. Class components should always call the base
      constructor with props, for example 'super(props)'. Also adding
      lifecycle hooks such as componentDidMount() which runs after the
    component has been rendered to the DOM and componentWillUnmount()
  which tears down the set up.</p>
      <p>It is {this.state.date.toLocaleTimeString()}.</p>
      <p>Summarizing how the clock above is working: The class renders the
      initial state of the component which is set in the constructor. After
    the component has rendered, it calls componentDidMount() which calls the
  function tick() every second. Tick() sets the state to new date. When the
state changes to the new date the component re-renders to display the change.</p>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('clock'));
