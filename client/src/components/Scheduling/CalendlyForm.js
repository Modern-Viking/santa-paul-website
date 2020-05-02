import React from 'react'

function CalendlyForm() {
    return (
        <section className="hero is-light is-large has-extra-padding">
            <div className='content has-text-centered' style={{fontSize:'32pt', fontWeight:'bold'}}>Book Santa Here!</div>
            <div className='columns'>
                <div className='column'>
                    <div className="field">
                        <label className="label">What is your name?</label>
                        <div className="control">
                            <input className="input is-primary" type="text" placeholder="Chris Kringle" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Enter your email address</label>
                        <div className="control has-icons-left">
                            <input className="input is-primary" type="email" placeholder="hollyjolly@santasworkshop.com" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label ">Choose appointment type</label>
                        <div className="control is-full-width">
                            <div className="select is-primary is-full-width">
                                <select className="is-full-width">
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
                            <textarea className="textarea is-primary" placeholder="Write Santa a letter"></textarea>
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
                <div className='column'>
                <div className='content has-text-centered' style={{fontSize:'16pt', fontWeight:'bold'}}>Santa's current schedule:</div>
                    <iframe id="iframePreview" className="content is-rounded" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23da2c38&amp;ctz=America%2FDenver&amp;src=aWE0bG9qMGljYmdidHZwbHNyaWt0YzNpbGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;title=Santa's%20Current%20Schedule"
                        style={{ border: "solid 3px #058C42", width: "100%", height: "420px", frameborder: "0", scrolling: "no" }}></iframe>
                </div>
            </div>
        </section>
    )
}

export default CalendlyForm;