import React from "react";
import {Link} from "react-router-dom";
import '../App.css';
import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../Context/usercontext";


function GenNavbar(){
    const {user, setUser} = useContext(UserContext)
    const auth = getAuth();
    async function logout(){
        signOut(auth).then(() => {
            setUser(null)
            // Sign-out successful.
         }).catch((error) => {
           // An error happened.
         });
    }
    
    return( 
        <>
        { user? <LogNavbar/> : <OutNavbar/>}
        </>
    )


}
function OutNavbar(){
    const {setUser} = useContext(UserContext)
    const auth = getAuth();
    async function logout(){
        signOut(auth).then(() => {
            setUser(null)
            // Sign-out successful.
         }).catch((error) => {
           // An error happened.
         });
    }
    
    return( 
        <div id="navbar">


    <Link to="/" class="navbarlink"><h1 > MentorMe</h1></Link>
    <Link to="howitworks" class="navbarlink"> <h4>  How it works</h4></Link>
    <Link to="aboutus" class="navbarlink"><h4> About Us</h4></Link>
    <Link to="/newsletter" class="navbarlink"><h4 > Newsletter </h4></Link>
    <Link to="login"><button id="login"> Log in</button></Link>
   <Link to="signup"> <button id="signupB"> Sign Up</button></Link>
   <button onClick={logout}> Log Out </button>
  

    </div>
    )


}

function LogNavbar(){
    
    const {setUser} = useContext(UserContext)
    const auth = getAuth();
    async function logout(){
        signOut(auth).then(() => {
            setUser(null)
            // Sign-out successful.
         }).catch((error) => {
           // An error happened.
         });
    }
    return(
        <div id="navbar">
        <Link to="/" class="navbarlink"><h1 > MentorMe</h1></Link>
        <Link to="howitworks" class="navbarlink"> <h4>  How it works</h4></Link>
        <Link to="aboutus" class="navbarlink"><h4> About Us</h4></Link>
        <Link to="/newsletter" class="navbarlink"><h4 > Newsletter </h4></Link>
        <Link to="/userprofile" class="navbarlink"><h4> User Profile</h4></Link> 
        <Link to="/startmeeting" class="navbarlink"><h4> Start Meeting</h4></Link>


     
       <button onClick={logout}> Log Out </button>
      
    
        </div>

    )
}

export default GenNavbar
