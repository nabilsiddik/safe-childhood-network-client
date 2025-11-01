import SectionHeading from "@/components/SectionHeading"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const GallerySection = () => {
    return (
        <div className="py-5 rounded-4xl mb-28 max-w-[439px] mx-auto -mt-8 z-999 relative">
            {/* <SectionHeading title="গ্যালারি" /> */}
            <Image className='mx-auto' src={'/images/gallery_images/gallery-section-title-image.png'} alt='section titile image' width={352} height={67}/>

            <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-3 auto-rows-[200px] px-5">
                <div className="overflow-hidden rounded-xl sm:w-[168px] w-full h-32 bg-[rgba(217,217,217,1)]">
                    
                </div>

                <div className="row-span-2 overflow-hidden rounded-xl sm:w-[168px] w-full bg-[rgba(217,217,217,1)]">
                    
                </div>

                <div className="overflow-hidden rounded-xl sm:w-[168px] w-full h-32 bg-[rgba(217,217,217,1)]">
                   
                </div>
            </div>

            <div className="flex justify-center">
                <Button size={'lg'} className='rounded-full bg-primary text-lg px-10 py-3 cursor-pointer mt-5'>আরো দেখুন</Button>
            </div>

        </div>
    )
}

export default GallerySection
