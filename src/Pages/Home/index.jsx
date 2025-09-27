import React from 'react'

import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import FullwidthSlider from '../../Component/FullwidthSlider'
import OurClients from '../../Component/OurClients'
import ServicesCard from '../../Component/ServicesCard'
import Video from '../../Component/Video'
import Instagram from '../../Component/Instagram'
import CardSlider from '../../Component/CardSlider'

const Home = () => {
  return (
    <>
      <Header />
        
      <section className="w-full h-lvh relative flex justify-center items-center">
          <h1 className='lg:text-[70px] sm:text-[50px] text-[30px] text-center text-[#C4996B] uppercase lg:leading-[104px]'>Top Luxury Real <br></br>
          Estate Agent in Dubai</h1>
        <img src="/banner.jpg" alt="" className='w-full h-full z-[-1] absolute top-0 left-0 object-cover' />
      </section>


      <section className="py-14 md:py-28">
        <div className="container lg:flex justify-between flex-row-reverse items-center">
          <div className="mb-8 lg:w-[480px]">
            <img src="/half-image.jpg" alt="" className='object-cover w-full max-h-[542px]' />
          </div>
          <div className="lg:w-[calc(100%-480px)] max-w-[545px]">
            <h2 className='text-[#C4996B] text-2xl mb-4 md:text-[40px] md:leading-[56px] md:mb-[28px]'>WE ARE COMMITTED TO ELEVATING YOUR F&B BUSINESS TO NEW HEIGHTS</h2>
            <p className='text-[14px] leading-6 md:text-[16px] md:leading-[23px] mb-3 md:mb-[34px]'>
              Silence Veiled is a leader in crafting unique, tailored solutions across hospitality dining, nightlife, entertainment, and more. With nearly two decades of expertise, specializes in uncovering niche opportunities and delivering standout experiences that set brands apart in competitive markets.
            </p>
            
            <a href="#" className='pl-5 border-[1px] border-amber-[#C4996B] flex w-fit justify-center items-center border-[#C4996B] rounded-[20px] font-["Montserrat"] font-bold text-[12px] text-[#C4996B] uppercase md:pl-[17px] hover:text-[#fff]'>Learn More <img src="/more-arrow.svg" className='ml-[14px] mr-[7px] my-[5px] inline-block' alt="" /></a>
            <div className="mt-[20px] md:mt-[54px] gap-5 md:gap-[35px] flex flex-col sm:flex-row text-center">
              <p className='w-fit md:text-[18px] leading-[26px]'>
                <span className='text-[#C4996B] text-5xl font-["Italiana"] font-normal block md:text-[86px]  md:mb-[14px]'>15+</span>
                Years Experience
              </p>
                <p className='w-fit md:text-[18px] leading-[26px]'>
                <span className='text-[#C4996B] text-5xl font-["Italiana"] font-normal block md:text-[86px]  md:mb-[14px]'>25+</span>
                Personal Staff
              </p>
                <p className='w-fit md:text-[18px] leading-[26px]'>
                <span className='text-[#C4996B] text-5xl font-["Italiana"] font-normal block md:text-[86px]  md:mb-[14px]'>150+</span>
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </section>

       <FullwidthSlider />

      <section className="my-14 md:my-28">
        <div className="container md:flex">
          <div className="h-[calc(100%+30px)] mb-[-30px] md:mb-0 md:h-[452px] md:w-[calc(50%+44px)] md:mr-[-44px] lg:w-[calc(50%+74px)] lg:mr-[-74px]">
            <img src="/robert-jones__image.jpg" alt="" className='w-full h-full object-cover' />
          </div>
          <div className="py-12 px-10 md:px-16 lg:px-0 lg:py-20 relative before:absolute before:top-0 before:left-0 before:border-2 before:border-[#C4996B] before:w-[calc(100%-10px)] before:h-[calc(100%-10px)] after:absolute after:top-[10px] after:left-[10px] after:w-[calc(100%-10px)] after:h-[calc(100%-10px)] after:border-2 after:border-[#C4996B] md:w-[50%] md:mt-[172px]">
              <div className="max-w-[407px] m-auto text-center relative z-10">
                <h2 className="text-[#CBA86B] text-4xl mb-4 uppercase lg:text-[45px] leading-[24px] md:mb-[40px] md:tracking-[0.539881px]">robert jones</h2>
            <p className='text-[14px] leading-6 mb-5 md:mb-8 md:text-[16px] md:leading-[23px]'>
              With over $9 Billion in sales, robert jones has developed a global reputation as the top Los Angeles & Beverly Hills real estate agent. She is ranked as the #1 Agent Worldwide for Coldwell Banker. Due to her expertise in the Beverly Hills real estate market and her integrity, loyalty & professionalism, Jade is sought out by A-list celebrities, tech founders, and business leaders.
            </p>
            <a href="#" className='m-auto pl-5 border-[1px] border-amber-[#C4996B] flex w-fit justify-center items-center border-[#C4996B] rounded-[20px] font-["Montserrat"] font-bold text-[12px] text-[#C4996B] uppercase md:pl-[17px] hover:text-[#fff]'>Learn More <img src="/more-arrow.svg" className='ml-[14px] mr-[7px] my-[5px] inline-block' alt="" /></a>
              </div>
          </div>
        </div>
      </section>

      <OurClients />

      <CardSlider />

      <ServicesCard />

      <Video />

      <Instagram />

      <Footer />

    </>
  )
}

export default Home