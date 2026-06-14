import React from 'react'
import ContactInfo from '../components/ContactInfo'
import QuickContactForm from '../components/QuickContactForm'
import FAQs from '../components/FAQs'

const Contact = () => {
  return (


    <section className='py-8 overflow-hidden bg-white'>
      <h2  data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" className='text-center font-semibold! text-2xl text-footer'>
        Get in Touch
      </h2>
      <p data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000" className="text-black mt-2 text-sm text-center max-w-3xl mx-auto">
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>



      {/* Two column layout */}
      <div className='flex justify-center mt-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl'>

         

                    {/* Left column - Contact Info */}
                    <div className=' rounded-xl p-8'>
                        <ContactInfo />
                    </div>

                    {/* Right column - Contact Form */}
                    <div className='bg-white rounded-xl shadow-md p-8'>
                        <QuickContactForm />
                    </div>

        </div>
      </div>
      <FAQs />


    </section>

    
  )
}

export default Contact
