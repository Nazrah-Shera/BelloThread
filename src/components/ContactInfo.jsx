import React from 'react'

const ContactInfo = () => {
  return (
       <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000"  className='flex flex-col gap-6'>
                <h2 class="text-base/7 font-semibold! text-gray-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Contact Information</h2>

   {/* Email */}
            <div className='flex items-start gap-4'>
                <div className='bg-[oklch(0.78_0.12_267.8/0.19)] p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </div>
                <div>
                    <h3 className='font-semibold! text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Email</h3>
                    <p className='text-blue-500 text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>bellothread@gmail.com</p>
                    <p className='text-gray-900 text-xs mt-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>We typically respond within 24 hours</p>
                </div>
            </div>
 {/* Business Hours */}
            <div className='flex items-start gap-4'>
                <div className='bg-[oklch(0.74_0.15_309.78/0.25)] p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-purple-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div>
                    <h3 className='font-semibold! text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Business Hours</h3>
                    <p className='text-gray-900 text-xs mt-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className='text-gray-900 text-xs transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Saturday: 10:00 AM - 4:00 PM</p>
                    <p className='text-gray-900 text-xs transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105' >Sunday: Closed</p>
                </div>
            </div>

            {/* Location */}
            <div className='flex items-start gap-4'>
                <div className='bg-[oklch(0.83_0.17_150.75/0.18)] p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
                <div>
                    <h3 className='font-semibold! text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Location</h3>
                    <p className='text-gray-900 text-xs mt-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Serving customers worldwide</p>
                    <p className='text-gray-900 text-xs transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>We ship internationally with tracked delivery</p>
                </div>
            </div>


              {/* Divider */}
            <hr className='border-gray-200' />

            {/* Find Us Online */}
            <div>
                <h3 className='font-semibold text-sm mb-3 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Find Us Online</h3>
                <div className='flex flex-col gap-2'>
                    <a href="#" className='flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        Visit our Etsy Store
                    </a>
                    <a href="#" className='flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        Follow us on Instagram
                    </a>
                    <a href="#" className='flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        Like us on Facebook
                    </a>
                </div>
            </div>

    </div>
  )
}

export default ContactInfo
