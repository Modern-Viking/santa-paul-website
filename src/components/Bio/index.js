import React from "react";
import santaPic from "../../Images/Santa.jpg";

const Bio = () => {
    return(
<section className="hero is-danger is-large">
  <div className="hero-body">
    <div className="container">

        <div className="columns">
            <div className="column">
                <img src={santaPic} alt="Santa in action." />
                First column
            </div>
            <div className="column">
                Bio Text
            </div>
        </div>

        </div>
  </div>
</section>
  )
};

export default Bio;