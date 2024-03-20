import React from "react";
import '../App.css';
import Blog from "../Components/blog";
import Grid from "../Components/grid";
import {db} from "../firebaseconfig";
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";

function Newsletter(id){
    async function responses(){
        await addDoc(collection(db, "Adviceresponse"),inputs
           
            
    )

    }
    const [posts, setPosts] = useState([])
    
    useEffect(()=> {
        async function getPosts(){
            const entries = collection(db, "Writer");
            const randVar = await getDocs(entries);
            const filteredData = randVar.docs.map((doc) => ({
                doc, ...doc.data()
              }));
            for(let i =0; i < filteredData.length; i++){
                filteredData[i].timestamp= filteredData[i].timestamp.toDate().toDateString();
            }
            setPosts(filteredData)

            // console.log(filteredData[0].timestamp.toDate().toDateString())
            
        }
        getPosts();

    },[])
    console.log(posts)
       
       
    
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
        <div>
            <div class="blogpost">
                {
                    posts.map((post)=>(
                        <Blog title={post.title} author={post.question} timestamp={post.timestamp} response={post.answers}/>
                    ))
                }
                <Blog title="Title filler" author="Author filler" timestamp="timestamp filler" response="response filler"/>
                          
            </div>
        </div>
        
    {/* <Grid one = {<Blog title="Title filler" author="Author filler" timestamp="timestamp filler" response="response filler"/>} /> */}
    <div id="aroundInput">
        <div id="secInput">

    <h1> Question Responses! </h1>  
        
        <form id="formInput">
        <h4> Enter your name:</h4>    
        <input value={inputs.name||""} onChange={handlechange} type="text" class="newsInput" name="name"/>	
        <br/>
        <h4> Enter your email:</h4>   
        <input value={inputs.email||""} onChange={handlechange} type="text" class="newsInput" name="email"/>
        <br/>
        <h4> Enter your response:</h4>   
        <textarea value={inputs.response||""} onChange={handlechange} type="text" class="newsInput" name="response"/>
        <br/>
        <br/>
        <input onClick= {handlesubmit} type="submit" value="submit" id="newsButton"/>
        

        </form>
        </div>

    </div>

    </div>
 )

}








export default Newsletter