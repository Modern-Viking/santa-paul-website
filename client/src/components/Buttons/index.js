import React from 'react'
import DeckTheHalls from './deckTheHalls'
import BookNow from './bookNow'

function Buttons() {
    return (
        <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
                <div className='columns'>
                    <div className='column is-two-fifths'>
                        <DeckTheHalls />
                    </div>
                    <div className = 'column is-one-fifth'>

                    </div>
                    <div className='column is-two-fifths'>
                        <BookNow />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons;