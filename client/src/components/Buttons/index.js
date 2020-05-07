import React from 'react';
import DeckTheHalls from './deckTheHalls';
import BookNow from './bookNow';
import Facebook from './Facebook';

function Buttons() {
    return (
        <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
                <div className='columns'>
                    <div className='column is-one-third'>
                        <DeckTheHalls />
                    </div>
                    <div className = 'column is-one-third'>
                        <BookNow/>
                    </div>
                    <div className='column is-one-third'>
                        <Facebook/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons;