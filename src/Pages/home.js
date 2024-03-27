import React from "react";
import {Link} from "react-router-dom";
import '../App.css';


function home() {
    return (
    

            <div id="home-background">
                <div id="image">
                   

                </div>
                <p class="homepara"> Private one-on-one sessions with high school students. </p>
                <p class="homepara"> Meet online or in person. Establish long lasting connections.</p>

           

                <div id="home-headwriting">

                <h2>
                    Making friends is easier than you think!
                </h2>
            </div>
            <div class= "reviews"> 
            <p> I had such a great time meeting with my high school volunteer! We played lots of games and I learned how to check my email!</p>
            </div>
            <br/>
            <div class= "reviews"> 
            <p> MentorMe has made me learn a lot about older life in NYC and i've recieved great advice from my senior buddy!</p>
            </div>
            <Link id= "getStartedlink" to="signup"> <button id="getstarted" > Get Started!</button> </Link>

            </div>
  
    )
}

export default home