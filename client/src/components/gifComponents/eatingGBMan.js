import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/l4S95Y0FRbdp8yvm4A/giphy.gif";
const still = "https://media.giphy.com/media/l4S95Y0FRbdp8yvm4A/giphy_s.gif";
 
const EatingGBMan = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default EatingGBMan;