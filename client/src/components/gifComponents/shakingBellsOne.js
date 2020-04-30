import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'

const src = "https://media.giphy.com/media/QAmSUmHpQWCoUyRHMm/giphy.gif";
const still = "https://media.giphy.com/media/QAmSUmHpQWCoUyRHMm/giphy_s.gif";
 
const ShakingBellsOne = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
    return (
        <div>
          <img src= {gifState ? still : src} />       
        </div>
      );
  }

  export default ShakingBellsOne;