import React from "react";
import '../App.css';
import Blog from "../Components/blog";

function newsletter(){
 return (
    <div id="blogform">
    <h1> Question Responses! </h1>  
        <Blog title="Title filler" author="Author filler" timestamp="timestamp filler" response="response filler" />
        
        <form>
        <input type="text" id="name" name="name"/>	
        <input type="text" id="email" name="email"/>
        <input type="text" id="response" name="response"/>
        <input type="submit" value="submit"/>	

        </form>
        

        


    </div>
 )

}







export default newsletter