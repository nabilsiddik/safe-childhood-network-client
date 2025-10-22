import EventSection from '@/components/sections/eventSection/EventSection'
import GallerySection from '@/components/sections/gallerySection/GallerySection'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='max-w-3xl mx-auto px-5 pt-[130px]'>
      <Image className='mx-auto mb-5 rounded-lg' src={'/images/home_images/home-image-1.jpg'} alt='safe childhood network' width={800} height={800}/>
      <Image className='mx-auto rounded-lg' src={'/images/home_images/home-image-2.png'} alt='safe childhood network' width={700} height={700}/>
      
      <EventSection/>

      <GallerySection/>
    </div>
  )
}

export default Home
