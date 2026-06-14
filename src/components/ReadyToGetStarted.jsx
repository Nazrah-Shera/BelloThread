import React from 'react'
import { Link } from "react-router-dom"

const ReadyToGetStarted = () => {
  return (
     <div className='max-w-4xl mx-auto'>
                  {/* Upper part */}
            <div className='bg-slider flex flex-col items-center justify-center py-16 px-6'>
                <h2 data-aos="flip-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50" className='transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 text-white text-center font-semibold! text-xl'>
                    Ready to Get Started?
                </h2>
                <p data-aos="zoom-in-up"  data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50"   className='text-white mt-2 text-sm px-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Fill out our order form and we'll get back to you with a custom quote</p>
                             <Link to="/ordernow" className="nav-link">

                <button  data-aos="flip-right" data-aos-offset="0" data-aos-delay="400"  data-aos-duration="1500" className='transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-6 px-3 md:px-5 py-1 md:py-2.5 bg-white text-footer text-sm  font-semibold! rounded-xl'>
                    Request a Quote
                </button>
                </Link>
            </div>

    </div>
  )
}

export default ReadyToGetStarted
