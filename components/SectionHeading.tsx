import React from 'react'

const SectionHeading = ({ title, classNames }: { title: string, classNames: string }) => {
    return (
        <div className='text-center'>
            <h2 className={`${classNames && classNames} font-bold text-3xl`}>{title && title}</h2>
            <div className='flex justify-center'>
                <span className='mt-3 w-[150px] h-[5px] bg-primary'></span>
            </div>
        </div>
    )
}

export default SectionHeading
