import React from "react";
import '../App.css';

function howitworks(){
    return (
        <div id="howitworkss">

 
        <div id="firststudentstep">
            <img class="stepimages" src={require("../Images/circle-1.png")} alt="firstcircle"/> 
            <h2 class="howtosteps"> Join you school Team Synergy club!</h2>
            <p class="howtosteps"> Join your school synergy club to begin. Your leaders will add you to our 
            database and connect you with Senior Citizens at your matched senior center</p>
        

        </div>
        <div id="secondstudentstep">
            <img class="stepimages" src={require("../Images/circle-2.png")} alt="secondcircle"/> 
            <h2 class="howtosteps"> Choose what days you are avlible to volunteer (according to your schools schedule)! </h2>
            <p class="howtosteps"> Once you become a member at your schools synergy club, look out for you school
            schedule, in terms of what days you could sign yp volunteer</p>

        </div>

        <div id="thirdstudentstep"> 
        <img class="stepimages" src={require("../Images/three.png")} alt="thirdcircle"/> 
            <h2 class="howtosteps"> Log in on your volunteer date!</h2>
            <p class="howtosteps"> 
            Once you have signed up as a member and chosen your date for voluntterong, be present! Log on-to 
            your virtual meeting during the set time. Ensure that you are on time and properly spend your hours volunteering!
            </p>
        </div>


        </div>
    )
}
export default howitworks