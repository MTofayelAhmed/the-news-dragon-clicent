import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
  const {user,  logOut}= useContext(AuthContext)
const handleLogout= ()=>{
  logOut()
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
}


  return (
    <div>
      <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           
             <Link to='/category/0'> Home</Link> 
             
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav>
            { user && <FaUserAlt></FaUserAlt>}
           
          
           { user?  <Button onClick={ handleLogout }variant="secondary">LogOut</Button>:
           <Link to ='/login'><Button variant="secondary">Login</Button></Link>
           
           }
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Container>
     
    </div>
  );
};

export default NavigationBar;