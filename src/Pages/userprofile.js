import React from "react";
import { doc, getDoc } from "firebase/firestore";
import {db} from "../firebaseconfig"
import {UserContext } from "../Context/usercontext";
import { useContext } from "react";
import '../App.css';


function Userprofile(){
    async function Store(){
    const { user } = await useContext(UserContext);
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
// Store()

function showLog() {
    let hidden = document.getElementById("hourslog").style.visibility
    console.log(document.getElementById("hourslog"))
    if (hidden === "hidden"){
        document.getElementById("hourslog").style.visibility = "visible"
    }
    else{
        document.getElementById("hourslog").style.visibility = "hidden"

    }
}
    return(
    <div id="userinfo">
    <h1> Profile Setting </h1>
     
    <div class="namebox">
    <h3> Name: </h3>
    <h2> </h2>
    </div>

    <div class="namebox">
    <h3> Email: </h3>
    <h2> </h2>
    </div>

    <div class="namebox">
    <h3> Grade: </h3>
    <h2> </h2>
    </div>

    <div class="namebox">
    <h3> School: </h3>
    <h2> </h2>
    </div>

    <div class="namebox">
    <h3> Region: </h3>
    <h2> </h2>
    </div>

    <div class="namebox">
    <h3> Volunteer Hours: </h3>
    <h2> </h2>
    </div>

    <button onClick={() => showLog()}> View Log </button>



            <table id= "hourslog" style={{visibility: "hidden",}}>
                <tr>
                    <th>
                        Date
                    </th>
                    <th>
                        Mentor Buddie
                    </th>
                    <th>
                         Number of Hours
                    </th>
                   
                    
                </tr>
                <tr>
                    <td>
                        <h2> 1/1/24 </h2>
                    </td>
                    <td>
                    <h2> Betty </h2>
                    </td>
                    <td>
                    <h2> 1 </h2>
                    </td>
                    
                </tr>
                <tr>
                <td>
                    <h2> 1/2/24 </h2>
                    </td>
                    <td>
                    <h2> John </h2>  
                    </td>
                    <td>
                    <h2> 2 </h2>
                    
                    </td>
                </tr>
            </table>
        </div>


    )




}



export default Userprofile;