import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/U6plxux4SdMp2MtpnR/giphy.gif";
const still = "https://media.giphy.com/media/U6plxux4SdMp2MtpnR/giphy_s.gif";
 
const LightStringTwo = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default LightStringTwo;