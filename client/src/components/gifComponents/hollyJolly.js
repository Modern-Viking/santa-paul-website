import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/Pic6LYYcVKE9VGmqY2/giphy.gif";
const still = "https://media.giphy.com/media/Pic6LYYcVKE9VGmqY2/giphy_s.gif";
 
const HollyJolly = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default HollyJolly;