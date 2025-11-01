'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EventSlide from '@/components/EventSlide';
import Image from 'next/image';

const EventSection = () => {

  return (
    <div className=' py-5 bg-[#2A2742] mx-auto'>
      {/* <SectionHeading title='আসন্ন ইভেন্ট' classNames='text-white' /> */}
      <Image className='mx-auto' src={'/images/event_images/event-section-title-image.png'} alt='section titile image' width={352} height={67} />

      <div>
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
    </div>
  )
}

export default EventSection
