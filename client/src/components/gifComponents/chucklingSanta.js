import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/d900an2KmyE7aLHmY1/giphy.gif";
const still = "https://media.giphy.com/media/d900an2KmyE7aLHmY1/giphy_s.gif";
 
const ChucklingSanta = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
    return (
        <div>
          <img src= {gifState ? still : src} />       
        </div>
      );
  }

  export default ChucklingSanta;