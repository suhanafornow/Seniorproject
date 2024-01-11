import React from "react";
import '../App.css';
import Blog from "../Components/blog";
import {db} from "../firebaseconfig";
import { collection, doc, setDoc, addDoc } from "firebase/firestore"; 
import { useState } from "react";

function Newsletter(id){
    async function responses(){
        await addDoc(collection(db, "Adviceresponse"),inputs
           
            
    )
    }
       
       
    
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
        responses()
        
}

 return (
    <div id="blogform">
    <h1> Question Responses! </h1>  
        <Blog title="Title filler" author="Author filler" timestamp="timestamp filler" response="response filler" />
        
        <form>
        <h4> Enter your name:</h4>    
        <input value={inputs.name||""} onChange={handlechange} type="text" id="name" name="name"/>	
        <br/>
        <h4> Enter your email:</h4>   
        <input value={inputs.email||""} onChange={handlechange} type="text" id="email" name="email"/>
        <br/>
        <h4> Enter your response:</h4>   
        <textarea value={inputs.response||""} onChange={handlechange} type="text" id="response" name="response"/>
        <br/>
        <br/>
        <input onClick= {handlesubmit} type="submit" value="submit"/>
        

        </form>
        

        


    </div>
 )

}








export default Newsletter