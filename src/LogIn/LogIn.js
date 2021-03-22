import React, { useContext } from 'react';
import  { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase.config';
import { Form } from 'react-bootstrap';
import { userContext } from '../App';
import { useHistory, useLocation } from 'react-router';
import './LogIn.css';



const LogIn = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	const history =useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/" } };

	if(firebase.apps.length===0){
		firebase.initializeApp(firebaseConfig);
	}
	
	const [newUser,setNewUser]=useState(false);
    const [user,setUser] =useState({
		isSignedIn: false,
		name: '',
		email: '',
		photo: '',
		password: '',
		error: ''
	})

	const handleGoogleSignIn = () => {
		
		var provider = new firebase.auth.GoogleAuthProvider();
		

		firebase.auth().signInWithPopup(provider).then((result) => {
			const {displayName,email} = result.user;
			const signedInUser = {displayName,email};
				var credential = result.credential;
				var token = credential.accessToken;
				var user = result.user;

        console.log(user,token,credential)
        setLoggedInUser(signedInUser);
		history.replace(from);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;

				var email = error.email;

				var credential = error.credential;

        console.log(errorMessage,errorCode,email,credential)
			});
	};
									// Facebook log in Authentication
	const handleFacebookSignIn = ()=>{
		var fbProvider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(fbProvider).then((result) => {
    // var credential = result.credential;
    var user = result.user;
    // var accessToken = credential.accessToken;
	console.log('fb user',user)
	setUser(user)
  })
  .catch((error) => {
 
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
	console.log(errorMessage,errorCode,email,credential)
  });

	}

	const handleChange =(e)=>{
	let isFormValid =true;
		if(e.target.name==='email'){
			isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
		
		}
		if(e.target.value==='password'){
			const isPasswordValid = e.target.value.length>6;
			const passwordHasNumber = /\d{1}/.test(e.target.value);
		isFormValid = isPasswordValid && passwordHasNumber;

		
		}
		if (isFormValid){
			const newUserInfo ={...user};
			newUserInfo[e.target.name] =e.target.value;
			setUser(newUserInfo);
		}


	}

 const handleSubmit=(e)=>{
	// console.log(user.email, user.password)
	if(newUser && user.email && user.password){
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then(res => {
	  const newUserInfo = {...user};
	  newUserInfo.error = '';
	  newUserInfo.success = true;
 setUser(newUserInfo);
 updateUserName(user.name);
  })
  .catch((error) => {
  const newUserInfo = {...user};
  newUserInfo.error =error.message;
  newUserInfo.success = false;
  setUser(newUserInfo);
  });
	}

	if(!newUser && user.email && user.password){
		firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(res => {
	const newUserInfo = {...user};
	newUserInfo.error = '';
	newUserInfo.success = true;
setUser(newUserInfo);
setLoggedInUser(newUserInfo)
console.log('sign in user info', res.user);
  })
  .catch((error) => {
    const newUserInfo = {...user};
  newUserInfo.error =error.message;
  newUserInfo.success = false;
  setUser(newUserInfo);
  });
	}
		e.preventDefault();
 }

 	const updateUserName =name =>{
		var user = firebase.auth().currentUser;

		user.updateProfile({
		  displayName: name,
		  photoURL: "https://example.com/jane-q-user/profile.jpg"
		}).then(function() {
		 console.log('user name updated successfully')
		}).catch(function(error) {
			console.log('error')
		});
	 }

    return (
        <div className='center'>
			  <h4>{loggedInUser.email}</h4>
			 <h2>{user.displayName}</h2>
            <h3>Welcome {loggedInUser.displayName}</h3>
			{/* Here is the Form */}
			<h1>Authentication Area</h1>
			<input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
				<label htmlFor="newUser"> New User Sign up</label>
			<Form onSubmit = {handleSubmit}>
				
				{newUser && <input type="text" onBlur={handleChange} name="" placeholder="write your name"/>}
				<br/>
				<input type="text" onBlur={handleChange} name='email' required placeholder='write your email address'/>
				<br/>
				<input type="password" onBlur={handleChange} name="password"  placeholder='password' id=""/>
				<br/>
			<input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
			</Form>
			<br/>
			<h4 style={{color:'red'}}>{user.error}</h4>
			
			{user.success && <h4 style={{color:'green'}}>User {newUser? 'created successfully': 'Logged in'}</h4>}
        <button variant ='Primary' onClick={handleGoogleSignIn}>Sign in Using Google</button>
		<br/>
        <button variant ='Primary' onClick={handleFacebookSignIn}>Sign in Using Facebook</button>
          
        </div>
    );
};

export default LogIn;