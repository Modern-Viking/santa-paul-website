import React, {useContext} from 'react'
import {DeckHallsContext} from '../pages/Main'


function DeckTheHalls() {
const {handleHallDecking, gifState} = useContext(DeckHallsContext);

    return (
        <div>
            <p className="control">
            <a className="button is-primary" href="" onClick= {handleHallDecking}>
              <span className="icon">
              <i class="fas fa-candy-cane"></i>
              </span>
              <span>Deck the Halls!</span>
            </a>
          </p>
        </div>
    )
}

export default DeckTheHalls;