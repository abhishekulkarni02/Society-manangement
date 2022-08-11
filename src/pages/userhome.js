import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
//import './css/style.css'
import pic from "./image1.jpg";

function UserHome(){

    return(
      <div>
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Info</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/userworkers">Workers</Nav.Link>
          <Nav.Link href="/userresident">Residents</Nav.Link>
          <Nav.Link href="/userexpenses">Expenses</Nav.Link>
          <Nav.Link href="/aboutus"> About Us</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      

      <img src={pic} height="1000" width="2000"></img></div>

    
    
    

    );
}

export default UserHome;