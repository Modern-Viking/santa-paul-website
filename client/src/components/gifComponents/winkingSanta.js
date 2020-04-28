import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/gH3MemPM3J5pkBPPvE/giphy.gif";
const still = "https://media.giphy.com/media/gH3MemPM3J5pkBPPvE/giphy_s.gif";
 
const WinkingSanta = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
    return (
        <div>
          <img src= {gifState ? src : still} />       
        </div>
      );
  }

  export default WinkingSanta;