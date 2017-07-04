var React = require('react');
import {Nav, Navbar, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';

const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Rupehra Chouhan</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Projects</NavItem>
        <NavItem eventKey={2} href="#">Work Experience</NavItem>
        <NavDropdown eventKey={3} title="Other" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Volunteer</MenuItem>
          <MenuItem eventKey={3.2}>Dance</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Resume</NavItem>
        <NavItem eventKey={2} href="#">Contact me</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbarInstance;
