import React from "react";
import '../App.css';
import { useEffect } from "react";
import DigitalSambaEmbedded from '@digitalsamba/embedded-sdk';

function Startmeeting(){
    useEffect(()=> {
        const roomUrl = 'https://mentormeglobal.digitalsamba.com/demo-room';
        const sambaFrame = DigitalSambaEmbedded.createControl({ url: roomUrl });
        //SDK will put a 5px solid red border around the iframe
        const instanceProps = { 
            frameAttributes: {style: "border: 10px solid red; width: 100%; height: 500px"}, 
            reportErrors: true 
         };
         sambaFrame.load(instanceProps);
    },[])

//SDK will create a frame as a child of the body tag and load the room url
 return(
    <h2> At your scheduled time, click below to join your meeting!</h2>

 )
}


export default Startmeeting;