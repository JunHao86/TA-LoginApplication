import React from 'react'
import {Button} from 'react-bootstrap';
function Manager() {
  return (
    <div>
        <h2>Secret webpage for Managers only!</h2>
        <Button variant="primary" href="/Welcome">Return to Welcome Page</Button>    
    </div>

  )
}

export default Manager