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
    <article className="tile is-child notification is-primary">
      <p className="body">{(reviews.length > 0) ? reviews[0].body : ""}</p>
      <p className="author">-{(reviews.length > 0) ? reviews[0].author : ""}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark">
      <div classNme="content">
      <img className="" src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/70159002_2162620927180926_4375491215471149056_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=l3--FrHGYsYAX-hN5dF&_nc_ht=scontent-den4-1.xx&oh=8809c6dcd8ca708ebbe105c7175bdd03&oe=5ED5352D"/>
      </div>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-danger">
    <p className="body">{(reviews.length > 0) ? reviews[6].body : ""}</p>
      <p className="author">-{(reviews.length > 0) ? reviews[6].author : ""}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-primary">
    <p className="body">{(reviews.length > 0) ? reviews[1].body : ""}</p>
      <p className="author">-{(reviews.length > 0) ? reviews[1].author : ""}</p>
    </article>
  </div>
</div>

<div className="tile is-ancestor">
  <div className="tile is-vertical is-9">
    <div className="tile">
      <div className="tile is-parent">
        <article className="tile is-child notification is-danger">
        <p className="body">{(reviews.length > 0) ? reviews[2].body : ""}</p>
      <p className="author">-{(reviews.length > 0) ? reviews[2].author : ""}</p>
        </article>
      </div>
      <div className="tile is-8 is-vertical">
        <div className="tile">
          <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
            <p className="body">{(reviews.length > 0) ? reviews[4].body : ""}</p>
      <p className="author">-{(reviews.length > 0) ? reviews[4].author : ""}</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-dark">
              <div className="content">
                <img className="" src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/68812614_2107823405994012_2641539547149631488_n.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=7T8roPkvdG8AX9MFz8c&_nc_ht=scontent-den4-1.xx&oh=ccc0cd6e3efa14689fcceb93b551c48f&oe=5ED5EC05"/>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-danger">
          <p className="body">{(reviews.length > 0) ? reviews[3].body : ""}</p>
      <p className="author">-{(reviews.length > 0) ? reviews[3].author : ""}</p>
          </article>
        </div>
      </div>
    </div>
    <div className="tile">
      <div className="tile is-8 is-parent">
        <article className="tile is-child notification is-dark">
          <div className="content">
            <img className="" src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/68404452_2107824092660610_2294008987038777344_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=ijPmi7MN228AX8BCpnf&_nc_ht=scontent-den4-1.xx&oh=edce9b349e71f6210e22ce3423b62473&oe=5ED48E89"/>
          </div>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-primary">
        <p className="body">{(reviews.length > 0) ? reviews[5].body : ""}</p>
      <p className="author">-{(reviews.length > 0) ? reviews[5].author : ""}</p>
        </article>
      </div>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark">
      <div className="content">
      <p className="body">{(reviews.length > 0) ? reviews[7].body : ""}</p>
      <p className="author">-{(reviews.length > 0) ? reviews[7].author : ""}</p>
      <div className="content">
        <img className="" src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/68430396_2107822602660759_5629252530643927040_n.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=Gl1_F1e-_pIAX-1M4fL&_nc_ht=scontent-den4-1.xx&oh=efc561fbe4f42ae899c7b787101c1d33&oe=5ED343FB"/>
        </div> 
      </div>
    </article>
  </div>
</div>

<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark">
      <div className="content">
        <img className="" src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/68793460_2107824635993889_686495087122710528_n.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=rCIAstSS9jcAX9yVe2y&_nc_ht=scontent-den4-1.xx&oh=4abd550031f21557d6502a86a7c4ad6d&oe=5ED65D9B"/>
      </div>
    </article>
  </div>
  <div className="tile is-parent is-6">
    <article className="tile is-child notification is-danger">
      <div className="content">
        <img className="" src="https://scontent-den4-1.xx.fbcdn.net/v/t31.0-8/25074749_1806025166087886_1901179943341367285_o.jpg?_nc_cat=106&_nc_sid=8024bb&_nc_ohc=RGCdePSUArwAX97V1Yz&_nc_ht=scontent-den4-1.xx&oh=ca98ec922cff210788249ab81831efc0&oe=5ED6F1A0"/>
      </div>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark">
      <div className="content">
      <img className="" src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/67927328_2107824195993933_5149684183248928768_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=b0pMSwt-_MQAX9ftMMk&_nc_ht=scontent-den4-1.xx&oh=9b01f7d4efae2722d6cde2540e7dd4f3&oe=5ED38221"/>
      </div>
    </article>
  </div>
</div>

    </div>
  </div>
</section>    )
};

export default Reviewgallery;




