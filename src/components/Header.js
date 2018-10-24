import React, { Component }  from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Navbar dark={true} color="dark"  expand="md">
      <NavbarBrand className="text-white">Brandon Yu, Software Developer</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects">Projects</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header
