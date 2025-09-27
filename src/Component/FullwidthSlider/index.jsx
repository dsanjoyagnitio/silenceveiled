import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const data = [
  {
    Image: "/FullwidthSlider1.jpg",
    Name: "Arabian Ranches",
    Content: "Discover"      
  },

  {
    Image: "/FullwidthSlider2.png",
    Name: "Arabian Ranches",
    Content: "Discover"          
  },

]


const FullwidthSlider = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='my-12'>
      <Slider {...settings}>
        {data.map((d, index) => (
            <div key={index} className=""> 
                <div className="">
                    <div className="m-0 relative after:w-full after:h-[100px] lg:after:h-[204px] after:bg-gradient-to-b after:from-transparent after:to-black after:absolute after:bottom-0 after:left-0">
                        <div className="absolut top-0 left-0 w-full h-[100%]">
                            <img src={d.Image} alt="" className='w-full object-cover max-h-[702px]' />
                        </div>
                        <div className="absolute bottom-[10px] lg:bottom-[51px] left-[22px] lg:left-[10%] 2xl:lg:left-[23%] w-[100%] z-10">
                           <h3 className='text-white uppercase font-["Italiana"] tracking-[0.57px] md:text-[36] md:leading-[25px] mb-5 text-[36px]'>{d.Name}</h3>
                           <p className='text-white text-[14px] tracking-[0.315521px] font-normal font-["Inter"] uppercase border-b-[1px] border-white inline-block'>{d.Content}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </Slider>
    </div>
  )
}

export default FullwidthSlider