import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/kHU5DmqrQh2xsmz3Lf/giphy.gif";
const still = "https://media.giphy.com/media/kHU5DmqrQh2xsmz3Lf/giphy_s.gif";
 
const OpeningPresent = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default OpeningPresent;