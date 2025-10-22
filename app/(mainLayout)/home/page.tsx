import EventSection from '@/components/sections/eventSection/EventSection'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto px-5 pt-[130px]'>
      <Image className='mx-auto mb-15' src={'/images/home_images/home-image-1.jpg'} alt='safe childhood network' width={700} height={700}/>
      <Image className='mx-auto' src={'/images/home_images/home-image-2.png'} alt='safe childhood network' width={700} height={700}/>
      
      <EventSection/>
    </div>
  )
}

export default Home
