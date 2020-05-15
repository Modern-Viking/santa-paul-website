import React, {useContext} from 'react'
import {DeckHallsContext} from '../../pages/Main'

const src = "https://media.giphy.com/media/QuyKu887noyJZm4MSP/giphy.gif";
const still = "https://media.giphy.com/media/QuyKu887noyJZm4MSP/giphy_s.gif";
 
const LightStringOne = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
    return (
        <div>
          <img src= {gifState ? still : src} />       
        </div>
      );
  }

  export default LightStringOne;