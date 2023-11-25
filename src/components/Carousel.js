import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; // Create a separate CSS file for styling

function CardCarousel() {
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: -200, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: 200, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
    <div className='title'>
        <h4><b>new arrivals</b></h4>
        <hr className='hr1'></hr>
    </div>
    <div className="card-scroller">
      <div className="scroll-container" ref={scrollerRef}>
      <div className="card card-card">
               <div className="card-image">
                 <img src='https://bravaland.com/cdn/shop/files/VUDU_BRIGADA_3_3copia2_25fedb75-3f14-4d30-b925-df685a1155df_640x640_crop_center.jpg?v=1691513041' alt='vudu brigada' className="zoom-in" />
               </div>
               <div className="card-footer">
                 <h5 className="card-title">vudu brigada</h5>
                 <a href='#' className='links'>
                   Shop Now
                 </a>
              </div>
            </div>
            <div className="card card-card">
               <div className="card-image">
                 <img src='https://bravaland.com/cdn/shop/files/CSC_LOOK3_3copia2_640x640_crop_center.jpg?v=1691101510' alt='vudu brigada' className="zoom-in" />
               </div>
               <div className="card-footer">
                 <h5 className="card-title">vudu brigada</h5>
                 <a href='#' className='links'>
                   Shop Now
                 </a>
              </div>
            </div>
            <div className="card card-card">
               <div className="card-image">
                 <img src='https://bravaland.com/cdn/shop/files/HOSKY_1_1copia2_640x640_crop_center.jpg?v=1691162298' alt='vudu brigada' className="zoom-in" />
               </div>
               <div className="card-footer">
                 <h5 className="card-title">vudu brigada</h5>
                 <a href='#' className='links'>
                   Shop Now
                 </a>
              </div>
            </div>
            <div className="card card-card">
               <div className="card-image">
                 <img src='https://bravaland.com/cdn/shop/files/CRYPTO_RAGGIES_3_3copia2_640x640_crop_center.jpg?v=1691169502' alt='vudu brigada' className="zoom-in" />
               </div>
               <div className="card-footer">
                 <h5 className="card-title">vudu brigada</h5>
                 <a href='#' className='links'>
                   Shop Now
                 </a>
              </div>
            </div>
            <div className="card card-card">
               <div className="card-image">
                 <img src='https://bravaland.com/cdn/shop/files/BITFINS_2_3copia2_1ed4f264-a7e5-43f9-9c55-abffd61559b8_640x640_crop_center.jpg?v=1696933721' alt='vudu brigada' className="zoom-in" />
               </div>
               <div className="card-footer">
                 <h5 className="card-title">vudu brigada</h5>
                 <a href='#' className='links'>
                   Shop Now
                 </a>
              </div>
            </div>
            <div className="card card-card">
               <div className="card-image">
                 <img src='https://bravaland.com/cdn/shop/files/PENDULUM_3_2copia2_640x640_crop_center.jpg?v=1691327816' alt='vudu brigada' className="zoom-in" />
               </div>
               <div className="card-footer">
                 <h5 className="card-title">vudu brigada</h5>
                 <a href='#' className='links'>
                   Shop Now
                 </a>
              </div>
            </div>
        {/* Add more cards as needed */}
      </div>
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
    </>
  );
}

export default CardCarousel;

