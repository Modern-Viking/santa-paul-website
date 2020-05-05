import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/fxeR9QrISaS1wDssRY/giphy.gif";
const still = "https://media.giphy.com/media/fxeR9QrISaS1wDssRY/giphy_s.gif";
 
const Mistletoe = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default Mistletoe;