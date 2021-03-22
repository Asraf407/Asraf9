import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from './LogIn/LogIn';
import Home from './Home/Home';
import Header from './Header/Header';
import Booking from './Booking/Booking';
import Ticket from './Ticket/Ticket';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Order from './Order/Order';
import NoMatch from './NoMatch/NoMatch';


export const userContext =createContext();


function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});

	return (
		<userContext.Provider value ={[loggedInUser, setLoggedInUser]}>
			<h3>Email: {loggedInUser.email}</h3>
		
		
			
			<Header></Header>
		<Router>
			<Switch>

			<Route path ="/home">
			<Home></Home>
			</Route>
			
		
		<Route path ='/logIn'>
		<LogIn></LogIn>
		</Route>

		<Route path ='/Ticket'>
			<Ticket></Ticket>
		</Route>

		
		<route path ='/Booking'>
				<Booking></Booking>
			</route>
		<PrivateRoute path ='/Order'>
				<Order></Order>
			</PrivateRoute>

		<Route exact path='/'>
			<Home></Home>
		</Route>
		<Route path="*">
            <NoMatch/>
			</Route>

		</Switch>
		</Router>
	</userContext.Provider>
	);
}

export default App;
