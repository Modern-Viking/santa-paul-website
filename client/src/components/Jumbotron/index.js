import React from "react";
import LightStringOne from "../gifComponents/lightStringOne";

const Jumbotron = () => {
  return (
    <section className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="container">

          <div className='columns has-text-centered has-less-padding'>
            <div className='column'>
              <p className='jumboFontScale1'>Welcome to</p>
            </div>
          </div>

          <div className='columns has-text-centered has-less-padding'>
            <div className='column'>
            <p className='jumboFontScale2'>Santa Paul's</p>
            </div>
          </div>
          <div className='columns has-text-centered has-less-padding'>
          <div className='column'>
            <p className='jumboFontScale1'>Workshop</p>
          </div>
        </div>
          <div className='columns is-gapless has-no-bottom-margin'>
            <div className='column is-hidden-touch'>
              <LightStringOne />
            </div>
            <div className='column centered'>
              <LightStringOne />
            </div>
            <div className='column is-hidden-touch'>
              <LightStringOne />
            </div>
          </div>

        
      </div>
      </div>
    </section >
  )
};

export default Jumbotron;