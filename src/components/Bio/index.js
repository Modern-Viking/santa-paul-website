import React from "react";
import santaPic from "../../Images/Santa.jpg";

const Bio = () => {
    return(
<section class="hero is-danger is-large">
  <div class="hero-body">
    <div class="container">

        <div className="columns">
            <div className="column">
                <img src={santaPic} alt="" />
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