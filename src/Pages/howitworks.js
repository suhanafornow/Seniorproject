import React from "react";
import '../App.css';

function howitworks(){
    return (
        <div id="howitworkss">
<div id="part1">
    <img class="stepimages" src={require("../Images/number-1.png")} alt="firstcircle"/> 
</div>
<div id="hiwSteps">
    <div id="allone">
        <img class="stepimages" src={require("../Images/number-1.png")} alt="firstcircle"/> 
        <div id="firststudentstep">
            <h2 class="howtosteps"> Join you school Mentor Me club!</h2>
            <p class="howtosteps"> Join your school Mentor Me to begin. Your leaders will add you to our 
            database and connect you with Senior Citizens at your matched senior center</p>
        </div>
    </div>

    <div id="alltwo">
        <img class="stepimages" src={require("../Images/number-2.png")} alt="secondcircle"/> 
        <div id="secondstudentstep">
            <h2 class="howtosteps"> Choose what days you are avlible to volunteer (according to your schools schedule)! </h2>
            <p class="howtosteps"> Once you become a member at your schools Mentor Me club, look out for you school
            schedule, in terms of what days you could sign up for</p>
        </div>
    </div>

    <div id="allthree">
        <img class="stepimages" src={require("../Images/number-3.png")} alt="thirdcircle"/> 
        <div id="thirdstudentstep"> 
            <h2 class="howtosteps"> Log in on your volunteer date!</h2>
            <p class="howtosteps"> 
            Once you have signed up as a member and chosen your date for volunteering, be present! Log on-to 
            your virtual meeting during the set time. Ensure that you are on time and properly spend your hours volunteering! 
            Once your done, your hours will be updated which you can see on your Volunteer Profile.
            </p>
        </div>
    </div>

</div>
        </div>
    )
}
export default howitworks