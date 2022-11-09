import { Navbar, Container, Nav } from "react-bootstrap"
import React from 'react'
import "../style/landingpage.css"

const Navigationbar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>ANDROMEDA</Navbar.Brand>
          <Nav>
            <Nav.Link href='#trending'>TRENDING</Nav.Link>
            <Nav.Link href='#superhero'>SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div >
  )
}

export default Navigationbar