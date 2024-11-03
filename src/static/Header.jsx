import React, { useEffect } from 'react';
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    // loader
    const handleLoad = () => {
     $(".loader").fadeOut();
     $("#preloder").delay(200).fadeOut("slow");
 };
 
 window.addEventListener('load', handleLoad);
 
 // my backround image change
 $('.set-bg').each(function () {
     const bg = $(this).data('setbg');
     $(this).css('background-image', 'url(' + bg + ')');
 });
 
 // Tools Image design
 $('.work__gallery').masonry({
     itemSelector: '.work__item',
     columnWidth: '.grid-sizer',
     gutter: 10,
 });
 
 // Navigation
 $(".mobile-menu").slicknav({
     prependTo: '#mobile-menu-wrap',
     allowParentLinks: true,
 });
 
 // Hero Slider
 const $heroSlider = $('.hero__slider');
 $heroSlider.owlCarousel({
     loop: true,
     dots: true,
     mouseDrag: false,
     animateOut: 'fadeOut',
     animateIn: 'fadeIn',
     items: 1,
     margin: 0,
     smartSpeed: 1200,
     autoHeight: false,
     autoplay: true,
 });
 
 // Update dots for the hero slider
 const dot = $heroSlider.find('.owl-dot');
 dot.each(function () {
     const index = $(this).index() + 1;
     $(this).html(index < 10 ? '0' + index : index);
 });
 
 // Counter
 $('.counter_num').each(function () {
     $(this).prop('Counter', 0).animate({
         Counter: $(this).text(),
     }, {
         duration: 4000,
         easing: 'swing',
         step: function (now) {
             $(this).text(Math.ceil(now));
         },
     });
 });
 
 // Cleanup event listener on component unmount
 return () => {
     window.removeEventListener('load', handleLoad);
 };
 }, []);
  return (
    <>
      <div id="preloader">
        <div className="loader"></div>
      </div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">
                <a href="./index.html">
                  <img src={Logo} alt="Company Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="header__nav__option">
                <nav className="header__nav__menu mobile-menu">
                  <ul>
                    <li className="active">
                      <Link to="#home">Home</Link>
                    </li>
                    <li><Link to="#About">About</Link></li>
                    <li><Link to="#Tools">Stack</Link></li>
                    <li><Link to="#Contact">Contact</Link></li>
                  </ul>
                </nav>
                <div className="header__nav__social">
                  <a href="#" aria-label="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
  
    </>
  );
};

export default Header;
