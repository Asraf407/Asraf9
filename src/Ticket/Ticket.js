import React from 'react';
import { Button } from 'react-bootstrap';



const Ticket = (props) => {
    
    // const [img,title,seat]=props;
    const style ={
        display:'flex',
        margin:'40px',
        justifyContent: 'space-between',
        backgroundColor: 'gray' ,
        border:'2px solid white'}
    console.log(props.ticket)
    return (
        <div style={style}>
            <div >
               <h3 className = 'text-light'> {props.ticket.title}</h3> 
               <p> {props.ticket.description}</p> 
                <h4> Seat type:{props.ticket.seatType} </h4> 
                <Button href="/Booking"> Book Now  </Button> 
                <hr/>
                <h3> {props.ticket.price}</h3>
               
            </div>
                
            

        </div>
    );
};

export default Ticket;