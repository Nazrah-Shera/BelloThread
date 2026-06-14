import React from 'react'

const FAQs = () => {
    return (
        <div>
            {/*pricing */}
            <div className='flex justify-center mt-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 bg-bulkOrder rounded-lg px-4 py-4 max-w-5xl w-full '>

                    {/* Move h2 inside here, above the cards */}
                    <h2 data-aos="fade-up" data-aos-offset="0" data-aos-delay="300" className='font-semibold! text-lg col-span-1 md:col-span-3  text-black'>
                        Frequently Asked Questions
                    </h2>


                    <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50" className='flex flex-row items-center justify-center gap-5 col-span-1 md:col-span-3'>
                        <div>
                            <p className='text-gray-900 text-sm font-bold! mb-3 mt-0'>What's your minimum order quantity?</p>
                            <p className='text-gray-650 text-xs'>We specialize in bulk orders starting from 50 pieces, but we can discuss smaller quantities on a case-by-case basis.</p>

                            <p className='text-gray-900 text-sm font-bold! mb-3 mt-3'>Do you ship internationally?</p>
                            <p className='text-gray-650 text-xs'>Yes! We ship worldwide with tracked delivery. Shipping costs vary by location and order size.</p>


                        </div>

                        <div>
                            <p className='text-gray-900 text-sm font-bold! mb-3 mt-0'>How long does production take?</p>
                            <p className='text-gray-650 text-xs'>Typical turnaround is 2-3 weeks after sample approval, but rush orders are available for an additional fee.</p>

                            <p className='text-gray-900 text-sm font-bold! mb-3 mt-3'>What payment methods do you accept?</p>
                            <p className='text-gray-650 text-xs'>We accept bank transfers, PayPal, and major credit cards. 50% deposit required to start production.</p>

                        </div>
                    </div>

                    {/* <p className='text-black text-xs col-span-1 md:col-span-3'>
       </p> */}





                </div>

            </div>
            {/*pricing end*/}
        </div>
    )
}

export default FAQs
