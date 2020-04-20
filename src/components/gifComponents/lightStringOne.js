var React = require('react');
var ReactDOM = require('react-dom');
var GifPlayer = require('react-gif-player');

const src = "https://media.giphy.com/media/ge3SRkPgNdAMmiSAaQ/giphy.gif";
const still = "https://media.giphy.com/media/ge3SRkPgNdAMmiSAaQ/giphy_s.gif";
 
const LightStringOne = () => {
    return (
        <GifPlayer
          gif={src}
          still={still}          
        />
      );
  }

  export default LightStringOne;