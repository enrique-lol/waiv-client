import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Navbar, Button, NavDropdown } from 'react-bootstrap'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link className='about' href="#/about"> <Button variant="outline-warning">Learn</Button>{' '}</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link className='about' href="#/about">About</Nav.Link>
    <Nav.Link className='nav-element' href="#sign-in"><Button variant='outline-light'>Log In</Button></Nav.Link>
    <Nav.Link className='nav-element' href="#sign-up"><Button variant='warning'>Join for Free</Button></Nav.Link>
  </Fragment>
)

const home = (
  <Navbar.Brand href="#/home">
    <p className='roboto-mono'>Waiv Magazine</p>
  </Navbar.Brand>
)

const unHome = (
  <Navbar.Brand href="#/">
    <p className='roboto-mono'>Waiv Magazine</p>
  </Navbar.Brand>
)
// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link href="#/">Home</Nav.Link>
//   </Fragment>
// )         { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
const adminOptions = (
  <Fragment>
    <Nav.Link href="#home/create-article">Create</Nav.Link>
  </Fragment>
)

const Header = ({ user, admin }) => (
  <Navbar >
    { user ? home : unHome }
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <NavDropdown className='dropdown' title={user.email} id="collasible-nav-dropdown">
          <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item id='n' href="#sign-out">Sign Out</NavDropdown.Item>
        </NavDropdown>}
        { user && admin === user.email ? adminOptions : null }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

//    { alwaysOptions }
// <Nav.Link href="#/">Home</Nav.Link>

export default Header
