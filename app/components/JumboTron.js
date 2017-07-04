var React = require('react');
import {Jumbotron, Button} from 'react-bootstrap';

function JumbotronInstance(props) {
  return (
    <Jumbotron>
      <h2>Rupehra Chouhan</h2>
      <br />
      <h4>{props.intro}</h4>
      <h4>Like my website? Go check it out on GitHub.</h4>
      <Button bsStyle="info">GitHub</Button>
    </Jumbotron>
  );
}
export default JumbotronInstance;
