import React, { useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Products = () => {
  const [productList] = useState(products)

    AOS.init({
               
            });
  return (

    <section className='py-8 overflow-hidden'>

      {/* cards */}

      <h2  data-aos="fade-up" data-aos-offset="0"   data-aos-duration="1000"  className='text-center font-semibold! text-2xl text-footer'>
        Our Products
      </h2>
      <p  data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000"  className="text-gray-500 mt-2 text-sm text-center max-w-md mx-auto">
        Explore our range of custom patches and keychains. All items available for bulk orders with competitive pricing.
      </p>


      <div className='mt-8'>


        <div className='flex justify-center'>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full'>

            <h3 data-aos="fade-up" data-aos-offset="0" data-aos-delay="600"   data-aos-duration="1000" className=' font-semibold! text-lg col-span-1 md:col-span-3 text-slider'>
              Custom Patches
            </h3>
            {productList.map((product) => (

              <ProductCard key={product.id} product={product} />


            ))}
          </div>
        </div>
      </div>




      {/*cards end */}
      {/*pricing */}
      <div className='flex justify-center mt-6'>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 bg-bulkOrder rounded-lg px-4 py-4 max-w-5xl w-full '>

          {/* Move h2 inside here, above the cards */}
          <h2 data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" className='font-semibold! text-lg col-span-1 md:col-span-3  text-slider'>
            Bulk Order Pricing
          </h2>


          <p data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000"  className='text-gray-500 text-sm col-span-1 md:col-span-3'>We specialize in bulk orders! The more you order, the better the price per unit. Contact us for a custom quote based on your specific needs.

          </p>


          <div   data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="100" className="w-full rounded overflow-hidden shadow-lg bg-card ">
            <div className="px-6 py-4">
              <div className="font-semibold! text-base">50-100 units</div>
              <p className="text-gray-500 mt-2 text-sm">
                Great starter pricing
              </p>
            </div>
          </div>


          <div   data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50" className="w-full rounded overflow-hidden shadow-lg bg-card">
            <div className="px-6 py-4">
              <div className="font-semibold!  text-base">100-500 units</div>
              <p className="text-gray-500 mt-2 text-sm">
                Best value pricing        </p>
            </div>
          </div>


          <div  data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="50"  className="w-full rounded overflow-hidden shadow-lg bg-card">
            <div className="px-6 py-4">
              <div className="font-semibold! text-base">500+ units</div>
              <p className="text-gray-500 mt-2 text-sm">
                Premium bulk discounts        </p>
            </div>
          </div>



        </div>

      </div>
      {/*pricing end*/}


    </section>


  )
}

export default Products
