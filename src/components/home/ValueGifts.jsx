import React, { useEffect } from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import axios from 'axios'
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import "swiper/css";
export const ValueGifts = () => {
const [data , setData] = useState([]);
useEffect(()=>{
    axios.get('http://localhost:3031/valueGifts')
    .then((res) => setData(res.data))
},[])
return (
    <div className="giftSection w-100">
    <div className="giftsHolder container ">
    <div className="giftText d-flex flex-column">
    <h2 className='fw-bold m-0'>Best Value Gifts</h2>
    <p>Enjoy Amazing Offers</p>
    </div>
    <Swiper className="mySwiper">
    <SwiperSlide className='' >
    <div className="holder d-flex flex-row  mt-3">
    {data.slice(0,6).map((data)=>{
        return(
            <div className="cardItem col-2" key={data.id}>
            <Link>
            <div className="imgSlider">
            <img src={data.imgUrl} alt="" />
            </div>
            <div className="textInside">
            <h5>{data.Title}</h5>
            <p>View All</p>
            </div>
            </Link>
            </div>
        )
    })}
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="holder d-flex flex-row mt-3">
    {data.slice(6,8).map((data)=>{
        return(
            <div className="cardItem col-2" key={data.id}>
            <Link>
            <div className="imgSlider">
            <img src={data.imgUrl} alt="" />
            </div>
            <div className="textInside">
            <h5>{data.Title}</h5>
            <p>View All</p>
            </div>
            </Link>
            </div>
        )
    })}
    </div>
    </SwiperSlide>
    </Swiper>
    </div>
    
    </div>
  )
}
