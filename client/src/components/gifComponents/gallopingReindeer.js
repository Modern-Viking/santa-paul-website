import React, {useContext} from 'react'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/Ws99b3pPODCxCe5Iga/giphy.gif";
const still = "https://media.giphy.com/media/Ws99b3pPODCxCe5Iga/giphy_s.gif";
 
const GallopingReindeer = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default GallopingReindeer;