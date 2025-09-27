import React from 'react'
import { useNavigate, Link } from "react-router-dom";

const data= [
    {
        Image: "/gallery-image-02.png"
    },

    {
        Image: "/gallery-image-02.png"
    },

    {
        Image: "/gallery-image-03.png"
    },

    {
        Image: "/gallery-image-04.png"
    },

    {
        Image: "/gallery-image-05.png"
    }

]

const Instagram = () => {
  return (
    <>
        <div className="my-12 lg:my-[86px]">
            <div className="container">
                <h2 className='text-[#C4996B] text-[32px] leading-[40px] lg:text-[45px] text-center mb-8 lg:leading-[63px]'>Follow us on Instagram</h2>
                <div className="flex justify-center flex-wrap gap-3">
                    {data.map (( d, index) => (
                        <div key={index} className="w-[215px] h-[215px]">
                            <Link to="#"><img src={d.Image} alt="" /></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Instagram