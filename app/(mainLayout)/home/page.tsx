import EventSection from '@/components/sections/eventSection/EventSection'
import GallerySection from '@/components/sections/gallerySection/GallerySection'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='max-w-3xl mx-auto px-3 pt-[130px]'>
      <Image className='mx-auto mb-5 rounded-lg' src={'/images/home_images/home-image-1.jpg'} alt='safe childhood network' width={800} height={800}/>

      <div className='bg-white py-5 px-5 rounded-3xl -mb-50 z-9999 relative'>
        <Image className='mx-auto rounded-lg' src={'/images/home_images/home-image-2.png'} alt='safe childhood network' width={700} height={700}/>
      </div>

      <EventSection/>
      <GallerySection/>
    </div>
  )
}

export default Home
