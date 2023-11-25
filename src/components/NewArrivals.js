import React from 'react';
import './NewArrivals.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
const NewArrivals = () => {
  const cards = [
    {
      image: 'https://bravaland.com/cdn/shop/files/dbcb76bd-7f89-49bc-ac5c-f5d329d9d706_35546574-099b-49d8-9e8d-2b891e7ffc72_640x640_crop_center.jpg?v=1696932361',
      title: 'Card 1',
      link: 'https://example.com',
    },
    {
      image: 'https://bravaland.com/cdn/shop/files/HOSKY_1_1copia2_a1fc6ca3-71b3-427a-8bc3-e582c5f9e09b_640x640_crop_center.jpg?v=1696932502',
      title: 'Card 2',
      link: 'https://example.com',
    },
    {
      image: 'https://bravaland.com/cdn/shop/files/iPhone14Full_ec6e7630-b45e-4a83-9937-5f7974d6b781_640x640_crop_center.png?v=1696932599',
      title: 'Card 3',
      link: 'https://example.com',
    },
  ];

  return (
    <>
    <div className='title'>
        <h4><b>new arrivals</b></h4>
        <hr className='hr1'></hr>
    </div>
    <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-image">
                <img src={card.image} alt={card.title} className="zoom-in" />
              </div>
              <div className="card-footer">
                <h5 className="card-title">{card.title}</h5>
                <a href={card.link} className='links'>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div></>
  );
};

export default NewArrivals;