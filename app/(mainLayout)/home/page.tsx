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
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7679 11.9048C22.1145 11.9048 21.5778 11.3496 21.5778 10.6654C21.5778 9.98127 22.1003 9.42602 22.7537 9.42602H22.7679C23.4214 9.42602 23.9517 9.98127 23.9517 10.6654C23.9517 11.3496 23.4214 11.9048 22.7679 11.9048ZM15.0008 22.8842C11.6105 22.8842 8.85306 19.9956 8.85306 16.446C8.85306 12.898 11.6105 10.011 15.0008 10.011C18.3911 10.011 21.1485 12.898 21.1485 16.446C21.1485 19.9956 18.3911 22.8842 15.0008 22.8842ZM23.8696 5.08979C23.6029 5.00221 23.2146 4.81878 22.8879 4.44365C22.7521 4.28831 22.5691 3.89997 22.3923 3.5265C21.9156 2.5168 21.2637 1.13529 19.9521 0.556905C18.2664 -0.183428 11.7951 -0.186733 10.0542 0.5536C8.75993 1.1105 8.10017 2.49863 7.61877 3.51163C7.43726 3.89171 7.25101 4.28501 7.11212 4.44365C6.78697 4.82043 6.3987 5.00221 6.15721 5.08318C0.953333 6.59029 0 10.1317 0 16.56C0 25.8538 2.16552 30 15.0008 30C27.8345 30 30 25.8538 30 16.56C30 10.1317 29.0482 6.59029 23.8696 5.08979Z" fill="#63C48C" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.001 12.489C12.916 12.489 11.2208 14.2638 11.2208 16.4468C11.2208 18.6298 12.916 20.4046 15.001 20.4046C17.086 20.4046 18.7812 18.6298 18.7812 16.4468C18.7812 14.2638 17.086 12.489 15.001 12.489Z" fill="#63C48C" />
          </svg>

        </div>
        <div className=''>
          <div className='w-20 h-20 rounded-full border-[#EEF7FF] border-3 absolute -top-1/2 left-1/2 transform -translate-x-1/2'>
            <Image className='rounded-full' src={'/images/home_images/home-bar-logo.jpg'} alt='home bar logo' width={80} height={80} />
          </div>
        </div>
        <div>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.1763 0.309437C25.0329 0.166714 24.8518 0.0678988 24.6541 0.0246085C24.4565 -0.0186819 24.2506 -0.00464748 24.0607 0.0650616L0.685687 8.56506C0.484097 8.64153 0.310539 8.77751 0.188066 8.95495C0.0655929 9.13239 0 9.34289 0 9.5585C0 9.7741 0.0655929 9.98461 0.188066 10.162C0.310539 10.3395 0.484097 10.4755 0.685687 10.5519L9.81256 14.1963L16.5488 7.43881L18.0469 8.93694L11.2788 15.7051L14.9338 24.8319C15.0125 25.0296 15.1488 25.1991 15.325 25.3185C15.5012 25.4378 15.7091 25.5015 15.9219 25.5013C16.1367 25.4969 16.345 25.4275 16.5195 25.3024C16.694 25.1772 16.8265 25.002 16.8994 24.8001L25.3994 1.42506C25.4718 1.23708 25.4893 1.03239 25.4498 0.834868C25.4103 0.637342 25.3154 0.455116 25.1763 0.309437Z" fill="#002DE3" />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default Home
