import React from 'react'
import { Reveal } from 'react-reveal'

export const AboutFirstSection = () => {
  return (
    <>
    <Reveal>
    <h1 className='about'>ABOUT</h1>

    <div className='about-content'>
        <h2>Welcome to FabiTravel</h2>
        <p>
                Explore the world with our premier travel experience. At <span>FabiTrabel</span>, we are dedicated to
        curating unforgettable journeys to a myriad of breathtaking destinations. Whether you're seeking
        the tranquility of tropical beaches, the thrill of vibrant city life, or the serenity of
        picturesque landscapes, our travel platform is your gateway to diverse and enriching adventures.
        Embark on a personalized journey with us and discover the beauty that awaits in every corner of
        the globe.
        </p>
      </div>
      <div className='testimonials-section'>
  <h2>What Our Customers Say</h2>
  <div className='testimonial'>
    <p>
      "Amazing experience! FabiTravel made our dream vacation come true. The variety of
      destinations and the seamless booking process exceeded our expectations."
    </p>
    <p className='testimonial-author'>- Happy Traveler 1</p>
  </div>
  <div className='testimonial'>
    <p>
      "I've been using FabiTravel for all my travel needs, and they never disappoint.
      Professional service, great options, and excellent customer support."
    </p>
    <p className='testimonial-author'>- Satisfied Explorer</p>
  </div>
</div>
</Reveal>
    </>
  )
}