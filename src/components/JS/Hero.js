import React from 'react';
import '../Css/Hero.css';
import img from "../../images/pexels-li-sun-2294361.jpg";

function Hero() {
  return (
    <div className="hero__main">
      <div className="hero">
        <div className="hero__text">
          <h2 className="promo">
            <span className="new">NEW</span> High intensive workout to burn
            calories fast
          </h2>
          <h1>Push</h1> <h1>yourself and</h1>
          <h1 className="heavy">WORKOUT.</h1> <h1>Are you</h1>
          <h1 className="heavy">READY?</h1>
          <button className="cta">START THE JOURNEY</button>
        </div>
        <div className="hero__imgRow">
          <img src={img} alt="" className="hero__image" />
        </div>
      </div>
    </div>
  );
}

export default Hero
