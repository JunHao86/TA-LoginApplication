import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Button} from 'react-bootstrap';

function Welcome() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem('username');
    axios
      .get(`http://localhost:8080/user/${username}`)
      .then(response => {
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data)); // Save user data
      })
      .catch(error => {
        console.error(`Error fetching user data: ${error}`);
        navigate('/login');
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  if (!user) {
    // Page loads up as with user state set as null, previews this while user is retrieved from API
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Container>
        <h2 className="mt-4">Welcome, {user.name}!</h2>
        <h3 className="mt-4">Username: "{user.username}"</h3>
        <h4 className="mt-4">Role: {user.role} </h4>
        <Row className="mt-4">
        <Button variant="secondary" onClick={handleLogout}>Logout</Button>
        {user.role.toLowerCase() === 'manager' && <Button variant="primary" href="/Manager">Manager Only Webpage!</Button>}
        </Row>
      </Container>
    </div>
  );
}

export default Welcome;
