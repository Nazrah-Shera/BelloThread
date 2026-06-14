import React from 'react'
import OurStory from '../components/OurStory'
import WhyChooseUs2 from '../components/WhyChooseUs2'
import HowItWorks from '../components/HowItWorks'
import ReadyToGetStarted from '../components/ReadyToGetStarted'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const About = () => {
     AOS.init({
                   
                });
  return (
  <section className='py-8 overflow-hidden bg-gray-100'>
      <h2 data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" className='text-center font-semibold! text-2xl text-footer'>
        About Us
      </h2>
      <p data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000" className="text-gray-500 mt-2 text-sm text-center max-w-3xl mx-auto">
        Creating high-quality custom patches and keychains for businesses, teams, and individuals
      </p>
      <OurStory />
      <WhyChooseUs2 />
      <HowItWorks />
      <ReadyToGetStarted />
    </section>
  )
}

export default About
