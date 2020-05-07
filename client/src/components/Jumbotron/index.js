import React from "react";
import LightStringOne from "../gifComponents/lightStringOne";

const Jumbotron = () => {
  return (
    <section className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="container">

          <div className='columns has-content-centered has-less-padding'>
            <div className='column'>
              <p className='jumboFontScale1'>Welcome to</p>
            </div>
          </div>

          <div className='columns has-content-centered has-less-padding'>
            <div className='column'>
            <p className='jumboFontScale2'>Santa Paul's</p>
            </div>
          </div>
          <div className='columns is-gapless'>
            <div className='column'>
              <LightStringOne />
            </div>
            <div className='column'>
              <LightStringOne />
            </div>
            <div className='column'>
              <LightStringOne />
            </div>
          </div>

        <div className='columns has-content-centered has-less-padding'>
          <div className='column'>
            <p className='jumboFontScale1'>Workshop</p>
          </div>
        </div>
      </div>
      </div>
    </section >
  )
};

export default Jumbotron;