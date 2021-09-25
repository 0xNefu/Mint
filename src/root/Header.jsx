import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { MENU_LINKS, WEBSITE_NAME } from '../data/General';
import { ConnectButton } from '../web3/components/index'

const Header = () => {
  return (
    <div className="header">
    <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" className='navbar'>
      <Navbar.Brand as={Link} to="/">
        {/* <img src={logo} alt={WEBSITE_NAME} className="header-logo-image" /> */}
        {WEBSITE_NAME}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {MENU_LINKS.map(ml => (
            <Nav.Link href='#' as={Link} to={ml.to}>{ml.name}</Nav.Link>
          ))}
        </Nav>
        <Nav>
        <div style={{display: 'block', margin: 'auto'}}>
        <ConnectButton />
        </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  );
}

export default Header;