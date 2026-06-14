import React from 'react'
import QuoteForm from '../components/QuoteForm'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const OrderNow = () => {
   AOS.init({
                 
              });
  return (
    
    <div>
           <section className='py-8 overflow-hidden bg-gray-100'>

      {/* cards */}

      <h2 data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" className='text-center font-semibold! text-2xl text-footer'>
        Request a Quote
      </h2>
      <p data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000" className="text-gray-500 mt-2 text-sm text-center max-w-lg mx-auto">
    Fill out the form below and we'll get back to you with pricing and timeline
      </p>

      <QuoteForm />
      </section>
    </div>
  )
}

export default OrderNow
