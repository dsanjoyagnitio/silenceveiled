import React from 'react'

const data= [
    {
        Icon: "/Icon1.svg",
        Title: "Sell A Property",
        content: "Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim."
    },
    {
        Icon: "/Icon2.svg",
        Title: "Buy A Property",
        content: "Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim."   
    },
    {
        Icon: "/Icon3.svg",
        Title: "Rent A Property",
        content: "Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim."   
    }
]

const ServicesCard = () => {
  return (
    <>
        <div className="my-12 lg:my-[130px]">
            <div className="container">
                <div className="text-center mb-10">
                    <h2 className='text-[#C4996B] text-[32px] leading-[40px] lg:text-[45px] lg:leading-[63px]'>Our Services</h2>
                    <p className='text-[#B8B8C1]'>Quis in porttitor purus sed</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center flex-wrap gap-6 lg:gap-9">
                    {data.map (( d, index) => (
                        <div key={index} className="border-[#C4996B] border-[1px] rounded-[12px] py-8 px-8 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-29px)]">
                            <div className="bg-[#C4996B] w-[120px] h-[120px] rounded-[100%] flex justify-center items-center m-auto mb-4"><img src={d.Icon} alt="" /></div>
                            <div className="text-center">
                                <h3 className="text-[32px] text-[#C4996B] leading-[45px] mb-4">{d.Title}</h3>
                                <p>{d.content}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    </>
  )
}

export default ServicesCard