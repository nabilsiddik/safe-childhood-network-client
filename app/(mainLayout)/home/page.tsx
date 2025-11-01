import EventSection from '@/components/sections/eventSection/EventSection'
import GallerySection from '@/components/sections/gallerySection/GallerySection'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='pt-[130px] relative max-w-[430px] mx-auto'>
      <Image className='mx-auto mb-[22px] rounded-lg' src={'/images/home_images/home-image-1.jpg'} alt='safe childhood network' width={800} height={800} />

      <div className='py-5 px-[15px] rounded-3xl z-1 relative'>
        <Image className='mx-auto rounded-lg' src={'/images/home_images/home-image-2.png'} alt='safe childhood network' width={700} height={700} />
      </div>

      <EventSection />
      <GallerySection /> 

    </div>
  )
}

export default Home
