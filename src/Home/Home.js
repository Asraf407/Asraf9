import React from 'react';
import Ticket from '../Ticket/Ticket';

const Home = () => {
    const style ={
        display:'flex',
        margin:'40px',
        justifyContent: 'space-between',
        border:'2px solid red'
    }
    const tickets=[
        {
            title:'Standard Ticket',
            description:'     Lorem ipsum, dolor sit amet consectetur adipisicing elit. possimus veritatis esse, dolore iste nem A, nesciunt',
            img: 'https://i.ibb.co/F46t67P/Group-33142.png',
            seat: 1,
            seatType:'single',
            avatar: 'S',
            price: '$170'
        },
        {
            title:'Golden Ticket',
            description:'     Lorem ipsum, dolor sit amet consectetur adipisicing elit. possimus veritatis esse, dolore iste nem A, nesciunt ',
            img: 'https://i.ibb.co/F46t67P/Group-33142.png',
            seat: 2,
            seatType:'couple',
            avatar: 'S',
            price: '$470'
        },{
            title:'Diamond Ticket',
            description:'     Lorem ipsum, dolor sit amet consectetur adipisicing elit. possimus veritatis esse, dolore iste nem A, nesciunt ',
            img: '../Images/Group 33144.png',
            seat: 5,
            seatType:'family',
            avatar: 'S',
            price:' $1170'
        }


    ]
    return (
        <div style={style}>
        {
            tickets.map(ticket => <Ticket key={ticket.seatType} ticket={ticket} ></Ticket>)
        }           
       
        </div>
    );
};

export default Home;