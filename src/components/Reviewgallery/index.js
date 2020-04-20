import React from "react";
import DancingSanta from "../gifComponents/dancingSanta";
import LightStringOne from "../gifComponents/lightStringOne";
import WinkingSanta from "../gifComponents/winkingSanta";
import ShakingBellsOne from "../gifComponents/shakingBellsOne";
import StockingOne from "../gifComponents/stockingOne";

const Reviewgallery = () => {
    return(
<section className="hero is-link is-large">
  <div className="hero-body">
    <div className="container">

<div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <ShakingBellsOne/>        
        </article>
        <article className="tile is-child notification is-warning">
          <p className="title">...tiles</p>
          <p className="subtitle">Bottom tile</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-dark">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <DancingSanta/>
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <LightStringOne/>
        <WinkingSanta/>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
        <p className="title">Tall tile</p>
        <p className="subtitle">With even more content</p>
        <div className="content">
          <StockingOne/>
        </div>
      </div>
    </article>
  </div>
</div>

    </div>
  </div>
</section>    )
};

export default Reviewgallery;