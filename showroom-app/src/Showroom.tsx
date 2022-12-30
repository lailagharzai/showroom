import React from "react";
import "./Showroom.css";

function Showroom() {
  return (
    <div className="main">
      <div className="cards">
        {[...Array(9)].map((x, i) => (
          <div className="card">
            <div className="card__image-container">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">JKHJHJKHKHKJ</p>
              <p className="card__price2 text--medium">£2000</p>
              <p className="card__description text--medium">
                This is a cool car
              </p>
              <div className="card__info">
                <p className="text--medium">30 Min</p>
                <p className="card__price text--medium">Free</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showroom;
