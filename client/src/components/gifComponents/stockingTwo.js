import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import {DeckHallsContext} from '../../pages/Main'


const src = "https://media.giphy.com/media/9Jv6gspGaphNG1yxrJ/giphy.gif";
const still = "https://media.giphy.com/media/9Jv6gspGaphNG1yxrJ/giphy_s.gif";
 
const StockingTwo = () => {
  const {handleHallDecking, gifState} = useContext(DeckHallsContext);
  return (
      <div>
        <img src= {gifState ? still : src} />       
      </div>
    );
  }

  export default StockingTwo;