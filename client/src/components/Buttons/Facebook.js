import React  from 'react';
import GallopingReindeer from '../gifComponents/gallopingReindeer';
import './buttons.css'

const Facebook = () => {

    return (
        <div>
            <div className="control">
            <a className="button is-link is-focused is-full is-large" href="https://www.facebook.com/nicolaus.claus.1">
            <div className='columns is-vcentered is-gapless'>
            <div className='column' style={{width:'100px', height:'100px'}}>
              <GallopingReindeer/>
            </div>
            <div className='column'>
              <span className='buttons'>Santa's Facebook</span>
            </div>
          </div>
            </a>
          </div>
        </div>
    )
}

export default Facebook;