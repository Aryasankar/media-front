import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Upload } from 'react-feather';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div> 
      <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand>
        
         <Link to={'/'} style={{textDecoration:'none'}}>
            <span className='text-light'>
  
              <Upload/>
  
            <span className='ms-2'>Videoo.com</span>
  
            </span>
  
            
         </Link>

      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

 