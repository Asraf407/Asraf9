import React from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    return (
        
               <div style={{ 
                   
      backgroundImage: `url("https://wallpaperaccess.com/full/1457225.jpg")` 
    }}>
            {/* Navbar start here */}
            <Navbar bg="dark" variant="dark">
                {/* <div className="container"> */}
                <Navbar.Brand >National Rail</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav className='navItems'>
                        
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Booking">Ticket Booking</Nav.Link>
                    <Nav.Link href="/LogIn">Log in</Nav.Link>
                    </Nav>
               
                </Nav>
            
                {/* </div> */}
            </Navbar>
            
            <div className ='title-container'>
                <h1>The National Train</h1>
                <h2>The Safest travel with speed</h2>
            </div>
        

                    {/* Navbar ends here */}
    <div className='link' ><Button href="/Booking">Let's travel with us</Button></div>             
    </div>

        

    
    );
};

export default Header;