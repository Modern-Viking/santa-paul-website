var React = require('react');
var ReactDOM = require('react-dom');


const active = "https://media.giphy.com/media/JqJM60q2ocmcak75Xb/giphy.gif";
const inactive = "https://media.giphy.com/media/JqJM60q2ocmcak75Xb/giphy_s.gif";
 
const DancingSanta = () => {
    return (
        <img
          active={active}
          inactive={inactive}          
        />
      );
  }

  export default DancingSanta;