import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const EventSlide = ({ eventImagePath, eventBtnText, eventBtnLink }: { eventImagePath: string, eventBtnText: string, eventBtnLink?: string }) => {
    return (
        <div className='bg-white rounded-lg p-[15px] mt-6 w-[366px] h-[310px] '>
            {/* <div className='w-full h-full' style={{
                backgroundImage: `url(${eventImagePath})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

            </div> */}
            <Image className='mb-3 rounded-lg mx-auto' src={eventImagePath} alt='event image' width={337} height={226} />
            
            <div className='flex justify-center pb-3'>
                <Link href={eventBtnLink ? eventBtnLink : ''} className='cursor-pointer'>
                    <Button size={'lg'} className='w-[237px] h-9 bg-[#FF7028] rounded-[60px]'>{eventBtnText}</Button>
                </Link>
            </div>
        </div>
    )
}

export default EventSlide
