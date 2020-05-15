import React from 'react'
import SpinningWreath from '../gifComponents/spinningWreath'
import './buttons.css'

function BookNow() {

  return (
    <div >
      <div className="control ">
        <a className="button is-danger is-full is-large is-focused" href="/schedule" >
          <div className='columns is-vcentered is-gapless'>
            <div className='column' style={{width:'100px', height:'100px'}}>
              <SpinningWreath />
            </div>
            <div className='column'>
              <span className='buttons'> Book me now!</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default BookNow;