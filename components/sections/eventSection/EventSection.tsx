'use client'
import SectionHeading from '@/components/SectionHeading'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EventSlide from '@/components/EventSlide';

const EventSection = () => {

  return (
    <div className='px-5 py-70 bg-[#2A2742]'>
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
