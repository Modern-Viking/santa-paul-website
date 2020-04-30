import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/JqJM60q2ocmcak75Xb/giphy.gif";
const still = "https://media.giphy.com/media/JqJM60q2ocmcak75Xb/giphy_s.gif";
 
const DancingSanta = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default DancingSanta;