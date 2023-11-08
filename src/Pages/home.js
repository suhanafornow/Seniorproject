import React from "react";
import '../App.css';


function home() {
    return (
        <div>
            <div id="home-background">
                <div id="image">
                    <h1> Connect with another generation</h1>
                    <p class="homepara"> Private one-on-one sessions with high school students. </p>
                    <p class="homepara"> Meet online or in person. Establish long lasting connections.</p>

                </div>

           

                    <div id="home-headwriting">

                <h2>
                    Making friends is easier than you think!
                </h2>
            </div>
            <div id="allsteps">
            <div id="home-step1">
                <div id="home-numbercircle1">
                    1
                </div>
                <p>
                    Create an account
                </p>
            </div>
            <img src={require("../Images/right-arrow.png")} alt="rightarrow1" class="rightarrows" />
            <div id="home-step2">
                <div id="home-numbercircle2">
                    2
                </div>
                <p>
                   Start video searching!
                </p>
            </div>
            <img src={require("../Images/right-arrow.png")} alt="rightarrow1" class="rightarrows" />
            <div id="home-step3">
                <div id="home-numbercircle3">
                    3
                </div>
                <p>
                    Get talking!
                </p>
            </div>
            </div>
            <button id="getstarted"> Get Started!</button>

            </div>
        </div>
    )
}

export default home