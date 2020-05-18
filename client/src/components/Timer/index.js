import React, {useRef, useEffect} from 'react'
import "./index.css"

const Timer = () => {

    let countdown = useRef();

    useEffect(() => {
        // Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  countdown.current.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    countdown.current.innerHTML = "EXPIRED";
  }
}, 1000);

// var ticker = document.querySelector('.ticker'),
//  list = document.querySelector('.tickerList'),
// clone = list.cloneNode(true)

// ticker.append(clone)
    })


    return (
        <section>
            <div className="ticker">
                <div className="tickerList">
                    <p className="tickerItem">Santa is Coming to Town in :</p>
                    <p className="tickerItem" ref={countdown}></p>
                </div>
            </div>
        </section>
    )
};

export default Timer;
