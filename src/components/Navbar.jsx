import React from 'react'
import { Nav,Button } from 'react-bootstrap';

const Navbar = () => {
    return (
        <>
          <Nav>
              <Nav.Item>
                  <Nav.Link href="https://www.google.com"><Button>+ Usuario</Button></Nav.Link>
              </Nav.Item>
          </Nav>
        </>
    )
}

export default Navbar