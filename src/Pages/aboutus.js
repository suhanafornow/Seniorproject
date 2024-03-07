import React from "react";
import '../App.css';

function aboutus(){
    return (
        <div id="aboutus-background">
            <div id="aboutus-image">
                <h1> INTRODUCING US!</h1>
                <p> Our goals at MentorMe touch upon a wide variety of categories. We aim to reduce the feeling of isolation that is unforutuanly </p>
            </div>
            <div id="meet-the-team">
                <h1> Meet the Team!</h1>
            </div>
            <div id="difference">
                <h1> The Synergy Difference</h1>
                
                 <div id="points">
                    <div id="first">

    
                <img src={require("../Images/link.png")} alt="connect" class="pointicons" />
                    <p class="pointbox"> We aim to solve the provle</p>
                    </div>
                    <div id="second">
                <img src={require("../Images/board-game.png")} alt="games" class="pointicons" />
                    <p class="pointbox"> Our involvement can help</p>
                    </div>
                    <div id="third">
                <img src={require("../Images/knowledge.png")} alt="learning" class="pointicons" />
                    <p class="pointbox"> It is important to consider</p>
                    </div>

                </div> 
                
            </div>
        </div>
       
    )
}

export default aboutus