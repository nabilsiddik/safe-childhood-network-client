'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EventSlide from '@/components/EventSlide';
import Image from 'next/image';

const EventSection = () => {

  return (
    <div className=' mx-auto relative'>
      <Image className='mx-auto -mt-10' src={'/images/event_images/event-top.png'} alt='section titile image' width={430} height={169} />

      {/* <SectionHeading title='আসন্ন ইভেন্ট' classNames='text-white' /> */}
      <Image className='mx-auto -mt-16' src={'/images/event_images/event-section-title-image.png'} alt='section titile image' width={352} height={67} />

      <div className="bg-[rgba(42,39,66,1)]">
        <Swiper className="mySwiper">
          <SwiperSlide>
            <EventSlide eventImagePath='/images/event_images/sisimpur.png' eventBtnText='বিস্তারিত জানুন' />
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide eventImagePath='/images/event_images/sisimpur.png' eventBtnText='বিস্তারিত জানুন' />
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide eventImagePath='/images/event_images/sisimpur.png' eventBtnText='বিস্তারিত জানুন' />
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide eventImagePath='/images/event_images/sisimpur.png' eventBtnText='বিস্তারিত জানুন' />
          </SwiperSlide>
        </Swiper>
      </div>

      <Image className='mx-auto z-100 -mt-12' src={'/images/event_images/event-bottom-png.png'} alt='section titile image' width={430} height={169} />
    </div>
  )
}

export default EventSection
