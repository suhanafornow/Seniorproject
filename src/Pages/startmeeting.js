import React from "react";
import '../App.css';
import { useEffect, useState, useContext } from "react";
import {UserContext } from "../Context/usercontext";

import { useNavigate } from "react-router-dom";

import DigitalSambaEmbedded from '@digitalsamba/embedded-sdk';

function Startmeeting(){
    let startMeet = true
    const {user} = useContext(UserContext)
    const navigate = useNavigate();
    useEffect(()=> {
        if (user != null){
            navigate("/")
        }
        console.log(4)
        const roomUrl = 'https://mentormeglobal.digitalsamba.com/demo-room';
        let parent = document.getElementById("loadO")
        const sambaFrame = DigitalSambaEmbedded.createControl({ url: roomUrl,
        root: parent
    });

        //SDK will put a 5px solid red border around the iframe
        const instanceProps = { 
            frameAttributes: {style: "border: 10px solid red; width: 100%; height: 500px"}, 
            reportErrors: true 
         };
         sambaFrame.load(instanceProps);
    },[startMeet])

//SDK will create a frame as a child of the body tag and load the room url
 return(
    <div id="loadO">
        <h2> At your scheduled time, click below to join your meeting!</h2>
    </div>

 )
}


export default Startmeeting;