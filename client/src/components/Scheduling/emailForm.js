import React from 'react';
import axios from 'axios';

function EmailForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const selection = document.getElementById('package').value;
        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: {
                name: name,
                email: email,
                package: selection,
                message: message,

            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                console.log("Message Sent.");
                resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            };
        });
    };

    const resetForm = () => {
        document.getElementById('emailForm').reset();
    }

    return (

<section>
        <div className="hero is-light is-large has-extra-padding">
            <div className='content has-text-centered' style={{fontSize:'32pt', fontWeight:'bold'}}>Book Santa Here!</div>
            <div className='columns'>
             <form id='emailForm' onSubmit={handleSubmit} method='POST'>
                <div className='column'>
                    <div className="field">
                        <label className="label">What is your name?</label>
                        <div className="control">
                            <input className="input is-primary" type="text" placeholder="Chris Kringle" id='name'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Enter your email address</label>
                        <div className="control has-icons-left">
                            <input className="input is-primary" type="email" placeholder="hollyjolly@santasworkshop.com" id='email'/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label ">Choose appointment type</label>
                        <div className="control is-full-width">
                            <div className="select is-primary is-full-width">
                                <select className="is-full-width" id='package'>
                                    <option>Please select</option>
                                    <option>In person (30-60 minutes)</option>
                                    <option>Virtual call (15 minutes)</option>
                                    <option>Other (Add details below)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea is-primary" placeholder="Write Santa a letter" id='message'></textarea>
                        </div>
                    </div>
                    <div className='field'>
                        <div className="control">
                            <label className="checkbox">
                                <input type="checkbox" />
                                    I hereby certify that I belong on the nice list.
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary">Submit</button>
                        </div>
                    </div>
                </div>
                </form>
                <div className='column'>
                <div className='content has-text-centered' style={{fontSize:'16pt', fontWeight:'bold'}}>Santa's current schedule:</div>
                <iframe src="https://calendar.google.com/calendar/b/4/embed?height=600&amp;wkst=1&amp;bgcolor=%23da2c38&amp;ctz=America%2FDenver&amp;src=c2FudGFzaXRldGVzdGVyQGdtYWlsLmNvbQ&amp;color=%23039BE5&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showDate=1&amp;title&amp;showTitle=0"
                        style={{ border: "solid 3px #058C42", width: "100%", height: "420px", frameborder: "0", scrolling: "no" }}></iframe>
                </div>
            </div>
        </div>

    <div className="columns">
        <div className="column"></div>
        <div className="column is-half">
            <a className="button is-danger is-full is-large" href="/">
              <span className="">
              <span className='is-w-95'> Back to Santa's Workshop</span>
              </span>
            </a>
        </div>
        <div className="column"></div>
    </div>
</section>
    )
}

export default EmailForm;