var React = require('react');
var ReactDOM = require('react-dom');
var GifPlayer = require('react-gif-player');

const src = "https://media.giphy.com/media/gH3MemPM3J5pkBPPvE/giphy.gif";
const still = "https://media.giphy.com/media/gH3MemPM3J5pkBPPvE/giphy_s.gif";
 
const WinkingSanta = () => {
    return (
        <GifPlayer
          gif={src}
          still={still}          
        />
      );
  }

  export default WinkingSanta;