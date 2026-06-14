import React from 'react'

const HowItWorks = () => {
  return (
     <section className='py-8 px-6 md:px-12'>


      <h2 data-aos="fade-up" data-aos-offset="0" data-aos-delay="300" className='transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 text-center font-semibold! text-xl'>
        How It Works
      </h2>

      <div className='max-w-4xl mx-auto'>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-2 mt-6'>

          <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50"  className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold mt-4 text-base">Submit Your Request</div>
              <p className="text-gray-500 mt-2 text-sm">
                Fill out our order form with your design details, quantity, and timeline. The more details you provide, the better we can serve you.
              </p>
            </div>
          </div>


          <div  data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50"  className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold mt-4 text-base">Get Your Quote</div>
              <p className="text-gray-500 mt-2 text-sm">
                We'll review your requirements and send you a detailed quote within 24 hours. Once approved, we'll request a 50% advance payment to begin.          </p>
            </div>
          </div>


          <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50"  className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold mt-4 text-base">Receive Your Order</div>
              <p className="text-gray-500 mt-2 text-sm">
                We'll create a sample for your approval, then move to full production. Pay the remaining 50% before delivery of your finished products.         </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks
