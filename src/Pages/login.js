import React from "react";
import '../App.css';
import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../Context/usercontext";


function Login(){
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handlechange = (event)=> {
        const name = event.target.name
        const value = event.target.value
        setInputs (values =>({...values, [name]:value}) )
    }
    const handlesubmit = (event)=> {
        event.preventDefault();
        const auth=getAuth();
        signInWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
            // Signed in 
            const userr = userCredential.user;
            console.log(user);
            setUser(userr)
            console.log(user);
            // ...
  },
)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error code", errorCode);
    console.log("error message", errorMessage);
    alert("Please make sure your password and/or email is correct.")
  });
    }
    if (user){
        navigate("/")
      }
    return (

        <div id="loginpage">
           
            <div id="loginboxes">
                <div id="second"> 
            <h1> Login here!</h1>
                 <form>
                    <h2> Enter your email here:</h2>
                    <input value={inputs.email||""} onChange={handlechange} type="text" id="email" name="email"/>
                    <h2> Enter your password here:</h2>
                    <input value={inputs.password||""} onChange={handlechange} type="text" id="password" name="password"/>
                    <input onClick={handlesubmit} type="submit" value="submit"/>	
                </form>
            </div>
            </div>

        <div id="loginimage">
        {/* <img src={require("../Images/login.jpeg")} alt="login" class="login" id="loginimagee"/> */}

      

        </div>








        </div>



        
    )
}


export default Login
