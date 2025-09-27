import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const data = [
    {
        img: "/clients1.png"
    },

    {
        img: "/clients2.png"
    },

    {
        img: "/clients3.png"
    },

    {
        img: "/clients4.png"
    },

    {
        img: "/clients1.png"
    },

    {
        img: "/clients5.png"
    },

    {
        img: "/clients6.png"
    },

    {
        img: "/clients7.png"
    }

]

const OurClients = () => {
    const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: false,    
    autoplay: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 3000,
    autoplaySpeed: 0, 
  };

  return (
    <>
        <div className="bg-[#141414] py-12 lg:pt-63px pb-[74px]">
            <div className="container">
                <h2 className='text-center text-[32px] lg:text-[40px] lg:leading-[56px] leading-[24px] text-[#C4996B] mb-[37px] uppercase'>our clients</h2>
                <div className="">
                    <Slider {...settings}>
                        {data.map((d, index) => (
                        <div key={index} className="w-[180px]">
                            <div className="">
                                 <img src={d.img} alt="" className='' />
                             </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurClients