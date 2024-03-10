import React from "react";
import '../App.css';
import { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebaseconfig";
import { useNavigate } from "react-router-dom";
import {UserContext } from "../Context/usercontext";
import {db} from "../firebaseconfig";
import { doc, setDoc } from "firebase/firestore"; 




    
function Signup(){
    async function createuser(id){
        await setDoc(doc(db, "Volunteers", id), {
            name: inputs.name,
            email: inputs.email,
            grade: parseInt(inputs.grade),
            school: inputs.school,
            region: inputs.region,
            hours: 0,
        
          });
    }
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})
    const handlechange = (event)=> {
        const name = event.target.name
        const value = event.target.value
        setInputs (values =>({...values, [name]:value}) )
    }
    const handlesubmit = (event)=> {
        event.preventDefault();
        console.log(inputs);
        // const auth= auth;
        createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setUser(user)
            console.log(user);
            // ...
            createuser(user.uid)
  }

  )
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error code", errorCode);
    console.log("error message", errorMessage);
    alert("Please make sure your password and/or email is valid.")
  });
}
if (user){
    navigate("/")
  }
    return (
        <div id="loginpage">
           
            <div id="loginboxes">
                <div id="second"> 
            <h1> Sign Up here!</h1>
                 <form>
                    <h2> Enter your name here:</h2>
                    <input value={inputs.name||""} onChange={handlechange}type="text" id="name" name="name"/>
                    <h2> Enter your email here:</h2>
                    <input value={inputs.email||""} onChange={handlechange} type="text" id="email" name="email"/>
                    <h2> Enter your password here:</h2>
                    <input value={inputs.password||""} onChange={handlechange}type="text" id="password" name="password"/>
                    <h2> Grade: </h2>
                    <input value={inputs.grade||""} onChange={handlechange}type="text" id="grade" name="grade"/>
                    <h2> School: </h2>
                    <input value={inputs.school||""} onChange={handlechange}type="text" id="school" name="school"/>
                    <h2> Region: </h2>
                    <input value={inputs.region||""} onChange={handlechange}type="text" id="region" name="region"/>
<br/>
                    <input onClick= {handlesubmit} type="submit" value="submit"/>	
                </form>
            </div>
            </div>

        <div id="loginimage">
        {/* <img src={require("../Images/login.jpeg")} alt="login" class="login" id="loginimagee"/> */}

      

        </div>








        </div>



        
    )
}
    

export default Signup