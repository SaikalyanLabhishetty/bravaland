// Appmain.js
import React from 'react';
import AppHeader from './AppHeader';
import Carousal from "@itseasy21/react-elastic-carousel";
import { Breakpoints, slider, marq } from './export';
import './Appmain.css';
import Marquee from 'react-fast-marquee';
import NewArrivals from './NewArrivals'
import Footer from "./Footer"
import Nft from "./Nft"
import Email from "./Email"
import CardCarousel from './Carousel';

const Appmain = () => {
  return (
    <div>
      <AppHeader />
      <div className='section-1'>
        <Carousal itemsToShow={1} autoPlaySpeed={30} showArrows={true} className='carousal' breakPoints={Breakpoints}>
          {slider.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.name} />
              <p style={{ color: 'white', textAlign: "center" }}>{slide.name}</p>
            </div>
          ))}
        </Carousal>
        </div>
        <div className='section-2'>
          <Marquee direction="left" speed={60} height={100} style={{ margin: '0', padding: '0' }}>
            <div className='test' key={marq[0].id} style={{ border: "1px solid #1c56a9", backgroundColor: "#1c56a9" }}>
              <img src={marq[0].image} alt={marq[0].name} />
              <p style={{ backgroundColor: "#1c56a9" }}>{marq[0].name}</p>
            </div>
            <div className='test' key={marq[1].id} style={{ border: "1px solid #C8CBD0", backgroundColor: "#C8CBD0", color: "black" }}>
              <img src={marq[1].image} alt={marq[1].name} />
              <p style={{ backgroundColor: "#C8CBD0", color: "black" }}>{marq[1].name}</p>
            </div>
            <div className='test' key={marq[2].id} style={{ border: "1px solid #212127", backgroundColor: "#212127" }}>
              <img src={marq[2].image} alt={marq[2].name} />
              <p style={{ backgroundColor: "#212127" }}>{marq[2].name}</p>
            </div>
            <div className='test' key={marq[3].id} style={{ border: "1px solid #295a76", backgroundColor: "#295a76" }}>
              <img src={marq[3].image} alt={marq[3].name} />
              <p style={{ backgroundColor: "#295a76" }}>{marq[3].name}</p>
            </div>
            <div className='test' key={marq[4].id} style={{ border: "1px solid #a152d1", backgroundColor: "#a152d1" }}>
              <img src={marq[4].image} alt={marq[4].name} />
              <p style={{ backgroundColor: "#a152d1" }}>{marq[4].name}</p>
            </div>
            <div className='test' key={marq[5].id} style={{ border: "1px solid #212127", backgroundColor: "#212127" }}>
              <img src={marq[5].image} alt={marq[5].name} />
              <p style={{ backgroundColor: "#212127" }}>{marq[5].name}</p>
            </div>
          </Marquee>
        </div>
        <NewArrivals/>
        <Nft/>
        <NewArrivals/>
        <Nft/>
        <CardCarousel/>
        <Email/>
        <Footer/>
    </div>
  );
}

export default Appmain;
