import React, {useContext} from 'react'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/ihAUgAlo5GVjPMtozB/giphy.gif";
const still = "https://media.giphy.com/media/ihAUgAlo5GVjPMtozB/giphy_s.gif";
 
const SpinningWreath = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default SpinningWreath;