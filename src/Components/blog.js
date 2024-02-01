import React from "react";
import '../App.css';

function blog(props){
    return (
    <div id="blogresponsepage">

    <h2 id= "blogtitle"> {props.title} </h2>
    <h3 id="author"> {props.author} </h3>
    <h3 id="timestamp"> {props.timestamp} </h3>
    <p id="blogresponse">
        {props.response}
    </p>
</div>
    )
}








export default blog;