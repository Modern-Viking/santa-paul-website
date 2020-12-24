import React, {useState} from "react";
import Jumbotron from "../components/Jumbotron";
import Bio from "../components/Bio";
import ReviewGallery from "../components/Reviewgallery";
import DeckTheHalls from "../components/Buttons/deckTheHalls";
import ShakingBellsOne from "../components/gifComponents/shakingBellsOne";
import Buttons from "../components/Buttons";
import Canvas from "../components/Canvas"




export const DeckHallsContext = React.createContext({
    
});


const Main = () => {
    const [gifState, setGifState] = useState(true);

const handleHallDecking = e => {
    e.preventDefault();
    console.log("gif state changed");
    setGifState(!gifState);
  }; 
        return(
            <DeckHallsContext.Provider value = {{
                handleHallDecking, gifState,
            }}>
            <Canvas/>
            <Jumbotron/>
            <Buttons/>
            <Bio/>
            <ReviewGallery/>
            </DeckHallsContext.Provider>
        )
};

export default Main;