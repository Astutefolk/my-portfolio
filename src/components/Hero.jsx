import React, { useEffect } from 'react';
import HeroImg from "../assets/img/hero/hero-2.png";
import '../assets/css/style.css'; 



const Hero = () => {
 

  return (
    <>
      
      <section className="hero" >
        <div className="hero__slider owl-carousel" id='Home'>
          <div className="hero__item set-bg" data-setbg={HeroImg}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__text">
                    <span>Hello,</span>
                    <h2>My name is Idris Adekunle Adeboyejo</h2>
                    <a href="#" className="primary-btn">Download Resume</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__item set-bg" data-setbg={HeroImg}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__text">
                    <span>My name is Idris Adekunle Adeboyejo</span>
                    <h2>I am a Software Developer</h2>
                    <a href="#" className="primary-btn">Download Resume</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__item set-bg" data-setbg={HeroImg}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__text">
                    <span>I am a Software Developer</span>
                    <h4 className="big_h2">With deep knowledge of REACTJS, TYPESCRIPT, JAVASCRIPT, PHP, CSS, HTML, PHOTOSHOP.</h4>
                    <a href="#" className="primary-btn">Download Resume</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Hero;
