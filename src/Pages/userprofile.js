import React from "react";
import { doc, getDoc } from "firebase/firestore";
import {db} from "../firebaseconfig"
import {UserContext } from "../Context/usercontext";
import { useContext } from "react";

import '../App.css';


function Userprofile(){
    async function Store(){
    const { user } = useContext(UserContext);
    console.log(user)
    const docRef = doc(db, "Volunteers", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } 
    else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}
Store()
 
    return(
    <div>
    <h1> User Profile</h1>
    <h3> Name </h3>
    <h3> Email </h3>
    <h3> Grade </h3>
    <h3> School </h3>
    <h3> Region </h3>
    <h3> Volunteer Hours</h3>
    <button> View Log </button>
    </div>
    )




}


export default Userprofile;