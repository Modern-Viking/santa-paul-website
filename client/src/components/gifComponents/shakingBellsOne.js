var React = require('react');
var ReactDOM = require('react-dom');
var GifPlayer = require('react-gif-player');

const src = "https://media.giphy.com/media/QAmSUmHpQWCoUyRHMm/giphy.gif";
const still = "https://media.giphy.com/media/QAmSUmHpQWCoUyRHMm/giphy_s.gif";
 
const ShakingBellsOne = () => {
    return (
        <GifPlayer
          gif={src}
          still={still}          
        />
      );
  }

  export default ShakingBellsOne;