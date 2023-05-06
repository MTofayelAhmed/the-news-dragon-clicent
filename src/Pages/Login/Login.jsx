import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
const navigate = useNavigate()
const location = useLocation()
console.log(location)
const from = location.state?.from?.pathname || '/category/0'


  const {signIn}= useContext(AuthContext)
const handleLogin = (event)=>{
  event.preventDefault()
  const form = event.target;
  const email = form. email.value;
  const password = form.password.value;
signIn(email, password)
.then(result =>{
  const login = result.user;

})
.catch(error =>{
  console.log(error)
})
navigate(from , {replace: true})
}

  return (
    <Container className="w-50 ">
      <Form onSubmit= {handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>
     
        <Button variant="primary" type="submit">
        Login
        </Button>
      <br />

        <Form.Text className="text-danger">
           
          </Form.Text>
        <Form.Text className="text-secondary">
          Don't have an account <Link to='/register'>Register</Link>
          </Form.Text>
        <Form.Text className="text-success">
           
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
