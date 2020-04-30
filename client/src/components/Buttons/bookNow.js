import React from 'react'

function BookNow() {

    return (
        <div >
            <p className="control ">
            <a className="button is-danger is-full is-large is-focused" href="https://bulma.io/documentation/" >
              <span className="">
              <i class="fas fa-gifts"></i>
              <span className='is-w-95'> Book me now!</span>
              </span>
            </a>
          </p>
        </div>
    )
}

export default BookNow;