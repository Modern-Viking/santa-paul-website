var React = require('react');
var ReactDOM = require('react-dom');
var GifPlayer = require('react-gif-player');

const src = "https://media.giphy.com/media/JqJM60q2ocmcak75Xb/giphy.gif";
const still = "https://media.giphy.com/media/JqJM60q2ocmcak75Xb/giphy_s.gif";
 
const DancingSanta = () => {
    return (
        <GifPlayer
          gif={src}
          still={still}          
        />
      );
  }

  export default DancingSanta;