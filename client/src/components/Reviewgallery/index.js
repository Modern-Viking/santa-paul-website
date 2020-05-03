import React, {useEffect, useState} from "react";
import DancingSanta from "../gifComponents/dancingSanta";
import LightStringOne from "../gifComponents/lightStringOne";
import WinkingSanta from "../gifComponents/winkingSanta";
import ShakingBellsOne from "../gifComponents/shakingBellsOne";
import StockingOne from "../gifComponents/stockingOne";
import API from "../../utils/API";

const Reviewgallery = () => {

  const [reviews, setReviews] = useState([]);

  const getReviewData = () => {
  API.getReviews()
  .then((res) => {
     setReviews(res.data)
   })
   .catch(err => console.log(err));
  };

    useEffect(() => {
      getReviewData();
          }, []);

console.log(reviews);

    return(
<section className="hero is-link is-large">
  <div className="hero-body">
    <div className="container">

      <div className="has-text-centered">
        <p className="blockTitle">Reviews and Photos</p>
      </div>

<div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
        <p className="title">{(reviews.length > 0) ? reviews[4].author : ""}</p>
          <p className="subtitle">{(reviews.length > 0) ? reviews[4].body : ""}</p>
          <ShakingBellsOne/>        
        </article>
        <article className="tile is-child notification is-warning">
          <p className="title">{(reviews.length > 0) ? reviews[0].author : ""}</p>
          <p className="subtitle">{(reviews.length > 0) ? reviews[0].body : ""}</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-dark">
          <p className="title">{(reviews.length > 0) ? reviews[1].author : ""}</p>
          <p className="subtitle">{(reviews.length > 0) ? reviews[1].body : ""}</p>
          <figure className="image is-4by3">
            <DancingSanta/>
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">{(reviews.length > 0) ? reviews[2].author : ""}</p>
        <p className="subtitle">{(reviews.length > 0) ? reviews[2].body : ""}</p>
        <LightStringOne/>
        <WinkingSanta/>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
        <p className="title">{(reviews.length > 0) ? reviews[3].author : ""}</p>
        <p className="subtitle">{(reviews.length > 0) ? reviews[3].body : ""}</p>
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