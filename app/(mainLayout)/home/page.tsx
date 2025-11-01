import EventSection from '@/components/sections/eventSection/EventSection'
import GallerySection from '@/components/sections/gallerySection/GallerySection'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='pt-[130px] relative max-w-[439px] mx-auto'>
      <Image className='mx-auto mb-[22px] rounded-lg' src={'/images/home_images/home-image-1.jpg'} alt='safe childhood network' width={800} height={800} />

      <div className='bg-white py-5 px-[15px] rounded-3xl z-50 relative'>
        <Image className='mx-auto rounded-lg' src={'/images/home_images/home-image-2.png'} alt='safe childhood network' width={700} height={700} />
      </div>

      <EventSection />
      <GallerySection />

      <div className='max-w-[439px] mx-auto flex flex-row justify-between items-center px-14 py-8 gap-10 
     fixed left-0 right-0 bottom-0 h-[75.6px]
     bg-white/75 shadow-[0_4px_25px_rgba(0,0,0,0.1)] backdrop-blur-[12.5px] 
     rounded-[50px] z-9999'>
        <div>
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0878 19.0481H8.88829C8.37572 19.0481 7.95972 18.6321 7.95972 18.1195C7.95972 17.607 8.37572 17.191 8.88829 17.191H16.0878C16.6004 17.191 17.0164 17.607 17.0164 18.1195C17.0164 18.6321 16.6004 19.0481 16.0878 19.0481ZM21.4624 5.76705C21.013 5.37086 20.5016 4.92267 19.8925 4.35933C19.6164 4.13648 19.3143 3.88143 18.9936 3.61152C17.186 2.08743 14.7098 0 12.4528 0C10.2217 0 7.90524 1.97105 6.04438 3.55457C5.70019 3.84676 5.37829 4.12162 5.05019 4.38781C4.47324 4.92267 3.96191 5.3721 3.51124 5.76952C0.555905 8.37076 0 9.05295 0 15.1209C0 26 3.146 26 12.4874 26C21.8276 26 24.9749 26 24.9749 15.1209C24.9749 9.05171 24.419 8.36952 21.4624 5.76705Z" fill="#1877F2" />
          </svg>


        </div>
        <div className=''>
          <div className='w-20 h-20 rounded-full border-[#EEF7FF] border-3 absolute -top-1/2 left-1/2 transform -translate-x-1/2'>
            <Image className='rounded-full' src={'/images/home_images/home-bar-logo.jpg'} alt='home bar logo' width={80} height={80} />
          </div>
        </div>
        <div>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.2732 4.50895C22.2732 6.99917 20.2545 9.0179 17.7643 9.0179C15.274 9.0179 13.2553 6.99917 13.2553 4.50895C13.2553 2.01873 15.274 0 17.7643 0C20.2545 0 22.2732 2.01873 22.2732 4.50895Z" fill="#CFD7ED" />
            <path d="M9.0179 4.50895C9.0179 6.99917 6.99918 9.0179 4.50895 9.0179C2.01873 9.0179 0 6.99917 0 4.50895C0 2.01873 2.01873 0 4.50895 0C6.99918 0 9.0179 2.01873 9.0179 4.50895Z" fill="#CFD7ED" />
            <path d="M22.2732 17.7643C22.2732 20.2545 20.2545 22.2732 17.7643 22.2732C15.274 22.2732 13.2553 20.2545 13.2553 17.7643C13.2553 15.2741 15.274 13.2553 17.7643 13.2553C20.2545 13.2553 22.2732 15.2741 22.2732 17.7643Z" fill="#CFD7ED" />
            <path d="M9.0179 17.7643C9.0179 20.2545 6.99918 22.2732 4.50895 22.2732C2.01873 22.2732 0 20.2545 0 17.7643C0 15.2741 2.01873 13.2553 4.50895 13.2553C6.99918 13.2553 9.0179 15.2741 9.0179 17.7643Z" fill="#CFD7ED" />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default Home
