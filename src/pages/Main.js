import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Bio from "../components/Bio";
import ReviewGallery from "../components/Reviewgallery";

const Main = () => {
        return(
            <div>
            <Navbar/>
            <Jumbotron/>
            <Bio/>
            <ReviewGallery/>
            </div>
        )
};

export default Main;