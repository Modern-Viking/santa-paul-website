import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Bio from "../components/Bio";
import ReviewGallery from "../components/Reviewgallery";
import DeckTheHalls from "../components/deckTheHalls";
import ShakingBellsOne from "../components/gifComponents/shakingBellsOne";
import WinkingSanta from "../components/gifComponents/winkingSanta";




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
            
            <Navbar/>
            <Jumbotron/>
            <DeckTheHalls/>
            <WinkingSanta/>
            <Bio/>
            <ReviewGallery/>
            <ShakingBellsOne/>
            </DeckHallsContext.Provider>
        )
};

export default Main;