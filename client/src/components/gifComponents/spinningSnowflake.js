import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/42G8mAhao6PjtmIH4A/giphy.gif";
const still = "https://media.giphy.com/media/42G8mAhao6PjtmIH4A/giphy_s.gif";
 
const SpinningSnowflake = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default SpinningSnowflake;