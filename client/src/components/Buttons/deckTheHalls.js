import React, {useContext} from 'react'
import {DeckHallsContext} from '../../pages/Main'


function DeckTheHalls() {
const {handleHallDecking, gifState} = useContext(DeckHallsContext);

    return (
        <div>
            <p className="control">
            <a className="button is-primary is-focused is-full is-large" href="" onClick= {handleHallDecking}>
              <span className="">
              <i class="fas fa-candy-cane"></i>
              <span className='is-w-95'> Deck the Halls!</span>
              </span>
            </a>
          </p>
        </div>
    )
}

export default DeckTheHalls;