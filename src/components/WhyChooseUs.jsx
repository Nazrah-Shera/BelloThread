import React, { useRef, useState,useEffect }  from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const WhyChooseUs = () => {
  
    AOS.init({
           
        });


    return (
        <section data-aos="slide-right" data-aos-offset="0" data-aos-duration="1000"  className='py-8 px-6 md:px-20 bg-whyChooseUs'>

            <h2 data-aos="fade-up" data-aos-offset="0" data-aos-delay="300" className='transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 text-center  font-semibold! text-xl'>
                Why Choose Us
            </h2>
      <div className='flex justify-center'>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mt-6'>
                {/* cards go here */}
                {/*Card #01*/}
                <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="700" className='flex flex-col items-center text-center'  >

                    {/* Icon circle */}
                    <div  className=' bg-[oklch(0.78_0.12_267.8/0.19)] p-1.5 rounded-full'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-blue-600 size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>


                    </div>

                    {/* Title */}
                    <h3  className='font-bold mt-4 text-base transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Premium Quality</h3>

                    {/* Description */}
                    <p className='text-gray-500 mt-2 text-sm px-6transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                        High-quality materials and precise craftsmanship in every piece
                    </p>

                </div>
                {/*Card #02*/}
                <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="700" className='flex flex-col items-center text-center'>

                    {/* Icon circle */}
                    <div className='bg-[oklch(0.74_0.15_309.78/0.25)] p-1.5 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-purple-600 size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>

                    </div>

                    {/* Title */}
                    <h3 className='font-bold mt-4 text-base transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Bulk Orders</h3>

                    {/* Description */}
                    <p className='text-gray-500 mt-2 text-sm px-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                        Specialized in bulk orders with competitive pricing
                    </p>

                </div>

                {/*Card #03*/}
                <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="700" className='flex flex-col items-center text-center'>

                    {/* Icon circle */}
                    <div className='bg-[oklch(0.83_0.17_150.75/0.18)] p-1.5 rounded-full'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-green-600 size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>

                    </div>

                    {/* Title */}
                    <h3 className='font-bold mt-4 text-base transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Fast Delivery</h3>

                    {/* Description */}
                    <p className='text-gray-500 mt-2 text-sm px-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                        Quick turnaround times without compromising quality
                    </p>

                </div>
                {/*Card #04*/}
                <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="700" className='flex flex-col items-center text-center'>

                    {/* Icon circle */}
                    <div className='bg-[oklch(0.77_0.17_47.21/0.16)] p-1.5 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-orange-600 size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>

                    </div>

                    {/* Title */}
                    <h3 className='font-bold mt-4 text-base transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Satisfaction Guaranteed</h3>

                    {/* Description */}
                    <p className='text-gray-500 mt-2 text-sm px-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                        We work with you until you're 100% happy with the result
                    </p>

                </div>

            </div>
</div>

        </section>
    )
}

export default WhyChooseUs
