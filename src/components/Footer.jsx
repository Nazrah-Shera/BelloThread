import React from 'react'
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



const Footer = ({ hideUpper }) => {
    AOS.init({
           
        });
  return (
     <footer>

            {/* Upper part */}
             {!hideUpper  && (
            <div className='bg-footer flex flex-col items-center justify-center py-16 px-6'>
                <h2 data-aos="flip-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50" className='transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 text-white text-center font-semibold! text-xl'>
                    Ready to Get Started?
                </h2>
                <p data-aos="zoom-in-up"  data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50" className='text-white mt-2 text-sm px-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Fill out our order form and we'll get back to you with a custom quote</p>
                               <Link to="/ordernow" className="nav-link">

                <button  data-aos="flip-right" data-aos-offset="0" data-aos-delay="400"  data-aos-duration="1500"  className='transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-6 px-3 md:px-5 py-1 md:py-2.5 bg-white text-footer text-sm  font-semibold! rounded-xl'>
                    Request a Quote
                </button>
                </Link>
            </div>
              )}

            {/* Lower part */}
            <div className='bg-black py-4 px-6 flex items-center justify-center'>
                <p className='text-gray-400 text-sm'>
                    © 2026 BelloThread. All rights reserved.
                </p>
            </div>

        </footer>
  )
}

export default Footer
