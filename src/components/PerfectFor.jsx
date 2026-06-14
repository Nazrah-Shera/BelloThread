import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const PerfectFor = () => {
     AOS.init({
             
          });
  return (
    <section data-aos="slide-left" data-aos-duration="1000"  data-aos-offset="0"  className='py-8 px-6 md:px-12'>


      <h2 data-aos="fade-up" data-aos-offset="0" data-aos-delay="300" className='text-center font-semibold! text-xl'>
        Perfect For
      </h2>

      <div className='flex justify-center'>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-2 mt-6'>

          <div  data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50"  className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold mt-4 text-base transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Businesses & Brands</div>
              <p className="text-gray-500 mt-2 text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105" >
                Custom branded merchandise for employees, customers, or promotional events
              </p>
            </div>
          </div>


          <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50" className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold mt-4 text-base transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Teams & Clubs</div>
              <p className="text-gray-500 mt-2 text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                Sports teams, gaming clans, or community groups looking for unified merch          </p>
            </div>
          </div>


          <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50" className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold mt-4 text-base transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Events & Conferences</div>
              <p className="text-gray-500 mt-2 text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                Memorable keepsakes for attendees at your special event          </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PerfectFor
