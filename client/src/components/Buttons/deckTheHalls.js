import React, { useContext } from 'react'
import { DeckHallsContext } from '../../pages/Main'
import ShakingBellsOne from '../gifComponents/shakingBellsOne';
import './buttons.css'

function DeckTheHalls() {
  const { handleHallDecking, gifState } = useContext(DeckHallsContext);

  return (
    <div>
      <div className="control">
        <a className="button is-primary is-focused is-full is-large" href="" onClick={handleHallDecking}>
          <div className='columns is-vcentered is-gapless'>
            <div className='column' style={{ width: '100px', height: '100px' }}>
              <ShakingBellsOne/>
            </div>
            <div className='column'>
              <span className='buttons'>Deck the Halls!</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default DeckTheHalls;