import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightNav = () => {
  return (
    <div>
      <h4>rightNav</h4>
      <Button className='mb-3' variant="outline-primary"> <FaGoogle />Login With Google</Button>
      <Button variant="outline-secondary"><FaGithub/> Login With GitHub</Button>
    </div>
  );
};

export default RightNav;