import React from 'react';
// import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Booking.css';

const Booking = () => {

    const history= useHistory()

  const handlePlaceOrder =() =>{
    history.push('/Order');

  }

    const style ={
        
        // margin: 'auto',
        width: '30%',
        border: '5px solid darkGray',
        padding:'10px',
    
    }

    return (
        <div className='d-flex'>
           <div style = {style}>

               <div>
               <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">From</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Dhaka</option>
    <option value="2">Chittagong</option>
    <option value="3">Sylhet</option>
  </select>
</div>

<div class="input-group mb-3">
  <select class="custom-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">Dhaka</option>
    <option value="2">Chittagong</option>
    <option value="3">Sylhet</option>
  </select>
  <div class="input-group-append">
    <label class="input-group-text" for="inputGroupSelect02">To</label>
  </div>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button"> Choose your Ticket </button>
  </div>
  <select class="custom-select" id="inputGroupSelect03">
    <option selected>Choose...</option>
    <option value="1">Standard Ticket (Single)</option>
    <option value="2">Golden Ticket (Couple)</option>
    <option value="3"> Diamond Ticket (Family) </option>
  </select>
</div>

<div class="input-group">
  <select class="custom-select" id="inputGroupSelect04">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <div class="input-group-append">
    <h5 class="btn btn-outline-secondary">Quantity</h5>
  </div>
  <div>
  <h5 class="btn btn-outline-secondary">Select your Traveling date</h5><input type="date" name="" id=""/> <input type="time" name="" id=""/>
  </div>
  
  <br/>
 
</div>
<br/>
<hr/>
<button onClick={handlePlaceOrder}> Proceed to Order </button>
{/* <Button href="/Order"> Book Now  </Button>  */}


</div>

</div>
<div className='map' >

   </div>


</div>
    );
};

export default Booking;