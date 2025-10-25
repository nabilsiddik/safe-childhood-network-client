import SectionHeading from "@/components/SectionHeading"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const GallerySection = () => {
    return (
        <div className="my-15 py-15 -mt-50 bg-white rounded-4xl">
            <SectionHeading title="গ্যালারি" />

            <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-5 auto-rows-[200px] px-5">
                <div className="overflow-hidden rounded-xl">
                    <Image
                        className="rounded-xl w-full h-full object-cover hover:scale-105 transition ease-in duration-200"
                        src="/images/event_images/equity-officer.png"
                        alt="Gallery image"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="row-span-2 overflow-hidden rounded-xl">
                    <Image
                        className="rounded-xl w-full h-full object-cover hover:scale-105 transition ease-in duration-200"
                        src="/images/event_images/equity-officer.png"
                        alt="Gallery image"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="overflow-hidden rounded-xl">
                    <Image
                        className="rounded-xl w-full h-full object-cover hover:scale-105 transition ease-in duration-200"
                        src="/images/event_images/equity-officer.png"
                        alt="Gallery image"
                        width={200}
                        height={200}
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <Button size={'lg'} className='rounded-full bg-primary text-lg px-10 py-3 cursor-pointer mt-5'>আরো দেখুন</Button>
            </div>

        </div>
    )
}

export default GallerySection
