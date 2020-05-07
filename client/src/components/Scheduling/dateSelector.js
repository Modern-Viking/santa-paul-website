import React from 'react'
import bulmaCalendar from '~bulma-calendar/dist/js/bulma-calendar.min.js';

const calendars = bulmaCalendar.attach('[type="date"]', options);
calendars.forEach(calendar => {

    calendar.on('date:selected', date => {
        console.log(date);
    });
});


const element = document.querySelector('#my-element');
if (element) {

    element.bulmaCalendar.on('select', datepicker => {
        console.log(datepicker.data.value());
    });
}

function dateSelector() {
    return (
        <div>
            <div class="field">
                <label class="label">Label</label>
                <div class="control">
                    <input id='dateTime' class="input" type="date" placeholder="Text input" />
                </div>
                <p class="help">This is a help text</p>
            </div>
        </div>
    )
}

export default dateSelector;