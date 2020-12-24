import React from 'react';
import DeckTheHalls from './deckTheHalls';
import BookNow from './bookNow';
import Facebook from './Facebook';

function Buttons() {
    return (
            <div className='hero'>
                <div className='columns'>
                    <div className='column is-one-third'>
                        <DeckTheHalls />
                    </div>
                    <div className='column is-one-third'>
                        <Facebook/>
                    </div>
                </div>
            </div>
    )
}

export default Buttons;