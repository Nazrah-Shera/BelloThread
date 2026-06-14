import React from 'react'

const OurStory = () => {
  return (
    <div>
            {/*pricing */}
      <div className='flex justify-center mt-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 bg-bulkOrder rounded-lg px-4 py-4 max-w-4xl w-full '>

          {/* Move h2 inside here, above the cards */}
          <h2 data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" className='font-semibold! text-lg col-span-1 md:col-span-3  text-black'>
            Our Story
          </h2>


          <p  data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000" className='text-black text-xs col-span-1 md:col-span-3'>
What started as a small passion project has grown into a thriving business helping brands, teams, and organizations bring their designs to life. We specialize in bulk <br/> orders because we believe that everyone deserves access to high-quality custom merchandise without breaking the bank.
<br/>
<br/>
Our journey began when we saw how difficult it was for small businesses and community groups to get affordable custom patches and keychains. Most <br/> manufacturers had minimum orders that were too high or quality that was too low. We knew there had to be a better way.
<br/>
<br/>
Today, we work with sports teams, corporate brands, gaming communities, event organizers, and creative entrepreneurs. Each project is unique, and we <br/>treat it with the care and attention it deserves.
          </p>





        </div>

      </div>
      {/*pricing end*/}
    </div>
  )
}

export default OurStory
