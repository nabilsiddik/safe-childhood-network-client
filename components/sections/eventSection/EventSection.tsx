'use client'
import SectionHeading from '@/components/SectionHeading'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EventSlide from '@/components/EventSlide';

const EventSection = () => {

  return (
    <div className='max-w-3xl mx-auto px-5 my-15 bg-[#2A2742] py-15 rounded-lg'>
      <SectionHeading title='আসন্ন ইভেন্ট' classNames='text-white' />

      <div>
        <Swiper className="mySwiper">
          <SwiperSlide>
            <EventSlide eventImagePath='/images/event_images/equity-officer.png' eventBtnText='বিস্তারিত জানুন'/>
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide eventImagePath='/images/event_images/equity-officer.png' eventBtnText='বিস্তারিত জানুন'/>
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide eventImagePath='/images/event_images/equity-officer.png' eventBtnText='বিস্তারিত জানুন'/>
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide eventImagePath='/images/event_images/equity-officer.png' eventBtnText='বিস্তারিত জানুন'/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default EventSection
