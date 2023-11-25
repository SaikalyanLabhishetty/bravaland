import React from 'react';
import './Nft.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nft = () => {
    return (
      <div className="background-image-container">
        <img
          src="https://bravaland.com/cdn/shop/files/home_page_banner_2_1d428404-a3ff-46da-9fe8-012d4747b114_1440x450_crop_center.png?v=1691525920"
          alt="Background"
          className="background-image"
        />
        <div className="overlay"></div>
        <div className="content">
          <h1><b>nft streetstyle</b></h1>
          <h4><b>celebrating the iconic designs behind top NFT brands</b></h4>
          <button className='btn bg-light m-2 shopNow'>shop now</button>
        </div>
      </div>
    );
  };
  
  export default Nft;