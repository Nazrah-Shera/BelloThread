import React from 'react'
import { Link } from "react-router-dom"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Slider = () => {
        AOS.init({
        });
    return (
        <div data-aos="slide-left" data-aos-duration="1000" data-aos-offset="0"  className='w-full min-h-75 bg-slider flex flex-col items-center justify-center px-6 md:px-20 py-6'>

            <h1 className='transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105  text-white font-bold text-3xl md:text-5xl text-center' data-aos='zoom-in' data-aos-offset="0" data-aos-delay="500"  data-aos-duration="1000">
                Welcome to BelloThread
            </h1>

            <p className='transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 text-white mt-4 text-base md:text-xl max-w-xl text-center' data-aos="fade-up"  data-aos-offset="0" data-aos-easing="ease"  data-aos-duration="1000" data-aos-delay="700">
                High-quality embroidered patches and custom keychains for your brand, team, or event. Bulk orders welcome!
            </p>

            <div className='flex gap-4 mt-8'>
                <Link to="/products" className="nav-link">
                    <button data-aos="flip-left" data-aos-delay="900" data-aos-duration="1500" data-aos-offset="0"  className='transition duration-500 ease-in-out transform  border-2 border-white bg-slider text-white hover:bg-white hover:text-slider hover:-translate-y-1 hover:scale-110 px-3 md:px-5 py-1 md:py-2.5 rounded-xl  text-sm font-semibold!'>View Products</button>
                </Link>

                <Link to="/ordernow" className="nav-link">

                    <button data-aos="flip-right" data-aos-delay="900"  data-aos-duration="1500" data-aos-offset="0"   className='transition duration-500 ease-in-out transform  border-2 border-white bg-slider text-white hover:bg-white hover:text-slider hover:-translate-y-1 hover:scale-110 px-3 md:px-5 py-1 md:py-2.5 rounded-xl text-sm font-semibold!'>Get Quote</button>
                </Link>
            </div>

        </div>
    )
}

export default Slider
