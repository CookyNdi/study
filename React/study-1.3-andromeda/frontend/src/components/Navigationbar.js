import React from "react";
import { Container, Form, Navbar, Image } from 'react-bootstrap'
import { IoIosNotifications } from 'react-icons/io'
import Profile from '../asset/img/pp.jpg'

const Navigationbar = () => {
  return (
    <Navbar className="bg-dark text-white" fixed="top">
      <Container className="justify-content-between">
        <a href='/' className="text-white logo">ANDROMEDA</a>
        <div className="SearchNav">
          <Form.Control type="search" placeholder="Search" aria-label="Search" />
        </div>
        <div className="navbarEnd">
          <IoIosNotifications className="Notif" />
          <Image src={Profile} />
        </div>
      </Container>
    </Navbar>
  )
}

export default Navigationbar;