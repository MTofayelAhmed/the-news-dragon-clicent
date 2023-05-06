import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
  const {user,createUser, updateUserProfile}= useContext(AuthContext)
const handleRegister = (event)=>{
event.preventDefault();
const form = event.target;
const email = form.email.value;
const password = form.password.value;
const name = form.name.value;
const photo = form.photo.value;
console.log(email, password, name, photo)
createUser(email, password)
.then(result => {
  const createdNew = result.user;

  updateUserProfile(createdNew, name, photo)
  .then(result => {
    console.log(result)
  })
  .catch(error=> {
    console.log(error)
  })


  console.log(createdNew)
  
  form.reset()
})
.catch(error=> {
  console.log(error.message)
})
}


  return (
    <Container className="w-50 ">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="your Photo"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check name='accept' type="checkbox" label="Accept terms & conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />

        <Form.Text className="text-danger"></Form.Text>
        <Form.Text className="text-secondary">
          Already have an account <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
      </Form>
    </Container>
  );
};

export default Registration;
