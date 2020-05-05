import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/ZbBnt8LpzNcmdiDwdA/giphy.gif";
const still = "https://media.giphy.com/media/ZbBnt8LpzNcmdiDwdA/giphy_s.gif";
 
const BouncingHat = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default BouncingHat;