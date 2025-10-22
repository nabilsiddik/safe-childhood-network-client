import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const EventSlide = ({ eventImagePath, eventBtnText, eventBtnLink }: { eventImagePath: string, eventBtnText: string, eventBtnLink?: string }) => {
    return (
        <div className='bg-white rounded-lg p-5 mt-10'>
            <Image className='mb-5 rounded-lg mx-auto' src={eventImagePath} alt='event image' width={700} height={700} />
            <div className='flex justify-center'>
                <Link href={eventBtnLink ? eventBtnLink : ''} className='cursor-pointer'>
                    <Button size={'lg'} className='rounded-full bg-primary text-lg px-10 py-3 cursor-pointer'>{eventBtnText}</Button>
                </Link>
            </div>
        </div>
    )
}

export default EventSlide
