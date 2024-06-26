import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import "swiper/css";

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function SalesSlider() {
  return (
    <>
     <div className="SalesSlider">
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     <SwiperSlide>
     <div className="CardSale">
     <Link>
     <div className="img-container">
     <img src="https://media.extra.com/i/aurora/iPhones_SmallBlock?&fmt=webp&h=64%201x,%20https://media.extra.com/i/aurora/iPhones_SmallBlock?&fmt=webp&h=128%202x" alt="" />
     </div>
     <div className="text-area">
     <h5>SmartPhones</h5>
     <p>Up to 52% OFF</p>
     </div>
     </Link>
     </div>
     <div className="CardSale">
     <Link>
     <div className="img-container">
     <img src="https://media.extra.com/i/aurora/Laptops_SmallBlock?&fmt=webp&h=64%201x,%20https://media.extra.com/i/aurora/Laptops_SmallBlock?&fmt=webp&h=128%202x" alt="" />
     </div>
     <div className="text-area">
     <h5>Laptops</h5>
     <p>Up to 46% OFF</p>
     </div>
     </Link>
     </div>
     <div className="CardSale">
     <Link>
     <div className="img-container">
     <img src="https://media.extra.com/i/aurora/WM_SmallSlider?&fmt=webp&h=64%201x,%20https://media.extra.com/i/aurora/WM_SmallSlider?&fmt=webp&h=128%202x" alt="" />
     </div>
     <div className="text-area">
     <h5>Washing Machines</h5>
     <p>Up to 65% OFF</p>
     </div>
     </Link>
     </div>
     <div className="CardSale">
     <Link>
     <div className="img-container">
     <img src="https://media.extra.com/i/aurora/Ref_SmallSlider?&fmt=webp&h=64%201x,%20https://media.extra.com/i/aurora/Ref_SmallSlider?&fmt=webp&h=128%202x" alt="" />
     </div>
     <div className="text-area">
     <h5>Refrigerators</h5>
     <p>Up to 61% OFF</p>
     </div>
     </Link>
     </div>
     <div className="CardSale">
     <Link>
     <div className="img-container">
     <img src="https://media.extra.com/i/aurora/WaterDispensers_SmallBlock?&fmt=webp&h=64%201x,%20https://media.extra.com/i/aurora/WaterDispensers_SmallBlock?&fmt=webp&h=128%202x" alt="" />
     </div>
     <div className="text-area">
     <h5>Water Dispensers</h5>
     <p>Up to 48% OFF</p>
     </div>
     </Link>
     </div>
     <div className="CardSale">
     <Link>
     <div className="img-container">
     <img src="https://media.extra.com/i/aurora/CoffeeMaker_SmallBlock?&fmt=webp&h=64%201x,%20https://media.extra.com/i/aurora/CoffeeMaker_SmallBlock?&fmt=webp&h=128%202x" alt="" />
     </div>
     <div className="text-area">
     <h5>Coffee machines</h5>
     <p>Up to 50% OFF</p>
     </div>
     </Link>
     </div>
     <div className="CardSale">
     <Link>
     <div className="img-container">
     <img src="https://media.extra.com/i/aurora/SmartWatches_SmallSlider?&fmt=webp&h=64%201x,%20https://media.extra.com/i/aurora/SmartWatches_SmallSlider?&fmt=webp&h=128%202x" alt="" />
     </div>
     <div className="text-area">
     <h5>Smart Watches</h5>
     <p>Up to 55% OFF</p>
     </div>
     </Link>
     </div>
     </SwiperSlide>
     <SwiperSlide className='justify-content-start'>
     <div className="CardSale">
     <Link>
     <div className="img-container">
     <img src="https://media.extra.com/i/aurora/PersonalCare_SmallBlock?&fmt=webp&h=64%201x,%20https://media.extra.com/i/aurora/PersonalCare_SmallBlock?&fmt=webp&h=128%202x" alt="" />
     </div>
     <div className="text-area">
     <h5>Personal Care</h5>
     <p>Up to 50% OFF</p>
     </div>
     </Link>
     </div>
     <div className="CardSale">
     <Link>
     <div className="img-container">
     <img src="https://media.extra.com/i/aurora/Luggage_SmallSlider?&fmt=webp&h=64%201x,%20https://media.extra.com/i/aurora/Luggage_SmallSlider?&fmt=webp&h=128%202x" alt="" />
     </div>
     <div className="text-area">
     <h5>Luggage</h5>
     <p>Up to 55% OFF</p>
     </div>
     </Link>
     </div>
     <div className="CardSale">
     <Link>
     <div className="img-container">
     <img src="https://media.extra.com/i/aurora/Scooters_SmallBlock?&fmt=webp&h=64%201x,%20https://media.extra.com/i/aurora/Scooters_SmallBlock?&fmt=webp&h=128%202x" alt="" />
     </div>
     <div className="text-area">
     <h5>Electric Scooters</h5>
     <p>Up to 41% OFF</p>
     </div>
     </Link>
     </div>
     </SwiperSlide>
     
   </Swiper>
     </div>
    </>
  );
}
