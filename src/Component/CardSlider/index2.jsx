import React from 'react'
import { data } from 'react-router-dom';
import Slider from "react-slick";

const data = [
  {
    Image: "/CardSliderImage1.jpg",
    Name: "1129 Tower Rd, Beverly Hills, CA 90210",
    Price: "$55,000,000",
    Bedrooms: "7 Bedrooms",
    Bathrooms: "15 Bathrooms",
    SqFt: "19,474 Sq.Ft."
  },
  {
    Image: "/CardSliderImage1.jpg",
    Name: "1129 Tower Rd, Beverly Hills, CA 90210",
    Price: "$55,000,000",
    Bedrooms: "7 Bedrooms",
    Bathrooms: "15 Bathrooms",
    SqFt: "19,474 Sq.Ft."
  },
  {
    Image: "/CardSliderImage1.jpg",
    Name: "1129 Tower Rd, Beverly Hills, CA 90210",
    Price: "$55,000,000",
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
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index}>
            <img src={d.Image} alt={d.Name} />
            <h3>{d.Name}</h3>
            <h4>{d.Price}</h4>
            <ul>
              <li>{d.Bedrooms}</li>
              <li>{d.Bathrooms}</li>
              <li>{d.SqFt}</li>
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CardSlider
