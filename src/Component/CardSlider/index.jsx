import React from 'react'
import Slider from "react-slick";

const data= [
  {
    Image: "/CardSliderImage1.jpg",
    Name: "1129 Tower Rd, Beverly Hills, CA 90210",
    Price: "$55,000,000",
    Bedrooms: "7 Bedrooms",
    Bathrooms: "15 Bathrooms",
    SqFt: "19,474 Sq.Ft."
  },
  {
    Image: "/CardSliderImage2.jpg",
    Name: "804 N Elm Dr, Beverly Hills, CA 90210",
    Price: "$39,995,000",
    Bedrooms: "7 Bedrooms",
    Bathrooms: "15 Bathrooms",
    SqFt: "19,474 Sq.Ft."
  },
  {
    Image: "/CardSliderImage3.jpg",
    Name: "1006 N Rexford Dr, Beverly Hills, CA 90210",
    Price: "$34,900,000",
    Bedrooms: "7 Bedrooms",
    Bathrooms: "15 Bathrooms",
    SqFt: "19,474 Sq.Ft."
  }
]

const CardSlider = () => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
  };
  return (
    <>
        <div className="mt-[71px] mb-[126px]">
            <div className="container">
              <h2 className="text-[#C4996B] text-[32px] leading-[40px] lg:text-[45px] lg:leading-[63px] mb-8">Exclusive Listings</h2>
            </div>
            <div className="slider-container ml-[22px] lg:ml-auto p-0 lg:w-[calc(50%+1178px/2)]">
                <Slider {...settings}>
                     {data.map ((d, index) => (
                        <div className="">
                            <div className="mb-3.5"><img src={d.Image} alt="" w-full /></div>
                            <div className="">
                              <h3 className='text-white text-[11px] font-normal leading-3 font-[Roboto] mb-3'>{d.Name}</h3>
                              <h4 className='text-[#9E9E9E] text-[11px] leading-4 font-[Roboto] mb-2'>{d.Price}</h4>
                              <ul className='flex justify-stard items-center'>
                                <li className='text-[#9E9E9E] text-[11px] leading-4'>{d.Bedrooms}</li>
                                <li className='text-[#9E9E9E] text-[11px] leading-4'>{d.Bathrooms}</li>
                                <li className='text-[#9E9E9E] text-[11px] leading-4'>{d.SqFt}</li>
                              </ul>
                            </div>
                        </div>
                    ))}                                                          
                </Slider>
            </div>
        </div>
    </>
  )
}

export default CardSlider