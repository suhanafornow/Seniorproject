import React from "react";
import '../App.css';

function Review(props){
    return(
        <div id="allr">

        <div id="imager" >
            {props.imager}
        </div>

        <div id="namer" >
            {props.namer}
        </div>

        <div id="textr">
            {props.textr}
        </div>
        
        </div>
    )
}


export default Review;