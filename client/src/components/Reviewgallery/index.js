import React, {useEffect, useState} from "react";
import DancingSanta from "../gifComponents/dancingSanta";
import LightStringOne from "../gifComponents/lightStringOne";
import WinkingSanta from "../gifComponents/winkingSanta";
import ShakingBellsOne from "../gifComponents/shakingBellsOne";
import StockingOne from "../gifComponents/stockingOne";
import API from "../../utils/API";
import "./reviewGallery.css";

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
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark">
      <p className="body">{(reviews.length > 0) ? reviews[0].body : ""}</p>
      <p className="author">{(reviews.length > 0) ? reviews[0].author : ""}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notifcation is-dark">
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark">
    <p className="body">{(reviews.length > 0) ? reviews[6].body : ""}</p>
      <p className="author">{(reviews.length > 0) ? reviews[6].author : ""}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-warning">
    <p className="body">{(reviews.length > 0) ? reviews[1].body : ""}</p>
      <p className="author">{(reviews.length > 0) ? reviews[1].author : ""}</p>
    </article>
  </div>
</div>

<div className="tile is-ancestor">
  <div className="tile is-vertical is-9">
    <div className="tile">
      <div className="tile is-parent">
        <article className="tile is-child notification is-dark">
        <p className="body">{(reviews.length > 0) ? reviews[2].body : ""}</p>
      <p className="author">{(reviews.length > 0) ? reviews[2].author : ""}</p>
        </article>
      </div>
      <div className="tile is-8 is-vertical">
        <div className="tile">
          <div className="tile is-parent">
            <article className="tile is-child notification is-dark">
            <p className="body">{(reviews.length > 0) ? reviews[4].body : ""}</p>
      <p className="author">{(reviews.length > 0) ? reviews[4].author : ""}</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-dark">
              <p className="title">Seven</p>
              <p className="subtitle">Subtitle</p>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark">
          <p className="body">{(reviews.length > 0) ? reviews[3].body : ""}</p>
      <p className="author">{(reviews.length > 0) ? reviews[3].author : ""}</p>
          </article>
        </div>
      </div>
    </div>
    <div className="tile">
      <div className="tile is-8 is-parent">
        <article className="tile is-child notification is-dark">
          <p className="title">Nine</p>
          <p className="subtitle">Subtitle</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-dark">
        <p className="body">{(reviews.length > 0) ? reviews[5].body : ""}</p>
      <p className="author">{(reviews.length > 0) ? reviews[5].author : ""}</p>
        </article>
      </div>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark">
      <div className="content">
      <p className="body">{(reviews.length > 0) ? reviews[7].body : ""}</p>
      <p className="author">{(reviews.length > 0) ? reviews[7].author : ""}</p>
      </div>
    </article>
  </div>
</div>

<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark">
      <p className="title">Twelve</p>
      <p className="subtitle">Subtitle</p>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
      </div>
    </article>
  </div>
  <div className="tile is-parent is-6">
    <article className="tile is-child notification is-dark">
      <p className="title">Thirteen</p>
      <p className="subtitle">Subtitle</p>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark">
      <p className="title">Fourteen</p>
      <p className="subtitle">Subtitle</p>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
      </div>
    </article>
  </div>
</div>

    </div>
  </div>
</section>    )
};

export default Reviewgallery;




