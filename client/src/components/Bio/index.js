import React from "react";
import santaPic from "../../Images/Santa.jpg";

const Bio = () => {
    return(
<section className="hero is-danger is-medium">
  <div className="hero-body">
    <div className="container">
      
      <div className="has-text-centered">
        <p className="blockTitle">Meet Santa Paul</p>
      </div>

        <div className="columns">
            <div className="column">
                <img src={santaPic} alt="Santa in action." />
            </div>
            <div className="column">
            I started out my Santa Claus journey in 2007 when I 
            was asked to fill the red suit for my wife’s school 
            and for my first grandchild’s first Christmas, so I 
            purchased an inexpensive suit and beard and new this 
            was a calling to something much bigger. 
            <br/>
            I continued 
            with this until 2016 when I decided it was time to put 
            away the inexpensive suit and traditional beard, so I 
            purchased a custom Santa suit and grew my own Santa beard. 
            Then in 2019 I signed up with Hire Santa Inc. and accepted a 
            contract with Bass Pro Shop as a real bearded Santa. 
            I have taken the stead of Santa at schools, churches, 
            hospitals, and private home visits just to name a few.
            </div>
        </div>

        </div>
  </div>
</section>
  )
};

export default Bio;