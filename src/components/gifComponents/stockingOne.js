var React = require('react');
var ReactDOM = require('react-dom');
var GifPlayer = require('react-gif-player');

const src = "https://media.giphy.com/media/KxaxguYxaf419SdwuP/giphy.gif";
const still = "https://media.giphy.com/media/KxaxguYxaf419SdwuP/giphy_s.gif";
 
const StockingOne = () => {
    return (
        <GifPlayer
          gif={src}
          still={still}          
        />
      );
  }

  export default StockingOne;