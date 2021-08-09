import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
             <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >WorkShop</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link >F1</Nav.Link>
      <Nav.Link >API</Nav.Link>
      <Nav.Link > <Link to="/" style={{textDecoration:"none", color:"rgba(255,255,255,.55)"}}>  Home </Link> </Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        </div>
    )
}

export default Header
