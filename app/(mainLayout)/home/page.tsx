import EventSection from '@/components/sections/eventSection/EventSection'
import GallerySection from '@/components/sections/gallerySection/GallerySection'
import Image from 'next/image'
import React from 'react'
import { RiDeleteBackFill } from "react-icons/ri";
import { MdWindow } from "react-icons/md";

const Home = () => {
  return (
    <div className='max-w-3xl mx-auto px-3 pt-[130px] relative'>
      <Image className='mx-auto mb-5 rounded-lg' src={'/images/home_images/home-image-1.jpg'} alt='safe childhood network' width={800} height={800}/>

      <div className='bg-white py-5 px-5 rounded-3xl -mb-20 z-9999 relative'>
        <Image className='mx-auto rounded-lg' src={'/images/home_images/home-image-2.png'} alt='safe childhood network' width={700} height={700}/>
      </div>

      <EventSection/>
      <GallerySection/>

      <div className='flex items-center justify-between gap-10 h-16 rounded-tl-3xl rounded-tr-3xl shadow-[4px_4px_12px_rgba(0,0,0,0.2)] fixed bottom-0 left-0 right-0 max-w-3xl mx-auto bg-white px-8 z-9999'>
        <div>
          <RiDeleteBackFill className='w-7 h-7 text-[#1877F2]'/>
        </div>
        <div className=''>
          <div className='w-20 h-20 rounded-full border-[#EEF7FF] border-3 absolute -top-1/2 left-1/2 transform -translate-x-1/2'>
            <Image className='rounded-full' src={'/images/home_images/home-bar-logo.jpg'} alt='home bar logo' width={80} height={80}/>
          </div>
        </div>
        <div>
          <MdWindow className='w-7 h-7 text-[#CFD7ED]'/>
        </div>
      </div>
    </div>
  )
}

export default Home
