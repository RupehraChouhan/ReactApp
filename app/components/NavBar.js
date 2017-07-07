var React = require('react');
import {Nav, Navbar, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import { Scrollchor } from 'react-scrollchor';
import Scrollspy from 'react-scrollspy'


class NavbarInstance extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicked Projects');
  }

  render() {
    const style = {
      minHeight: '500px',
  }
  return (
    <div>

      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Rupehra Chouhan</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#section-1" onClick={this.handleClick}>Projects</NavItem>
            <NavItem eventKey={2} href="#section-2">Work Experience</NavItem>
          <NavDropdown eventKey={3} title="Other" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Volunteer</MenuItem>
              <MenuItem eventKey={3.2}>Dance</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>

          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#section-3">Resume</NavItem>
            <NavItem eventKey={2} href="#">Contact me</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container">
        <section style={ style } id="section-1">
          <p>CS student at University of Alberta and former intern at Intuit
Like my website? Go check it out on GitHub.</p>
        </section>
        <section style={ style } id="section-2">
          <p>CS student at University of Alberta and former intern at Intuit
Like my website? Go check it out on GitHub.</p>
        </section>
        <section style={ style } id="section-3">
          <p>CS student at University of Alberta and former intern at Intuit
Like my website? Go check it out on GitHub.</p>
        </section>
      </div>

    </div>
    );
  }
}


export default NavbarInstance;
