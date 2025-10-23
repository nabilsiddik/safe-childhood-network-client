import { auth } from '@/auth';
import { IMessage } from '@/types/userTypes';
import Image from 'next/image'
import React from 'react'
import { FaCamera } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const ChatInbox = async ({ params }: { params: { id: string } }) => {
    const session = await auth()
    const user = session?.user
    const { id } = params

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/message/${id}`)
    const data = await res.json()
    const messages = data?.data

    return (
        <div className='container mx-auto px-5 min-h-screen flex flex-col justify-between relative'>
            <div className='container mx-auto fixed top-0 left-0 right-0 w-full bg-white h-20 flex items-center gap-3 px-5 z-10'>
                <Image className='rounded-full' src={'/images/chat_images/scn_chat_logo.jpg'} width={50} height={50} alt='scn logo' />
                <h3 className='text-xl font-bold'>Safe Childhood Network</h3>
            </div>




            {/* chat list  */}
            <div className='bg-[#d2edf7] backdrop-blur-lg flex-1 p-5 overflow-y-auto max-h-screen no-scrollbar pt-30 pb-20'>
                {(messages && messages.length > 0) && messages.map((message: IMessage) => {
                    if (message.sender === user?.email) {
                        {/* receiver message  */ }
                        return <div className='mb-10 flex flex-col items-end'>
                            <div className='bg-[#718FF9] text-white p-7 rounded-lg rounded-br-none max-w-10/12 lg:max-w-6/12 xl:max-w-4/12 mb-2'>
                                <p>{message?.text}</p>
                            </div>
                            <div className='mt-1 text-[#515151]'>02:58 PM</div>
                        </div>
                    } else {
                        {/* sender message  */ }
                        return <div className='mb-10'>
                            <div className='bg-[#00FF6C78] text-black p-7 rounded-lg rounded-bl-none max-w-10/12 lg:max-w-6/12 xl:max-w-4/12 mb-2'>
                                <p>{message?.text}</p>
                            </div>
                            <div className='mt-1 text-[#515151]'>02:58 PM</div>
                        </div>
                    }
                })}
            </div>





            <div className='container mx-auto px-10 fixed bottom-0 left-0 right-0 h-20 bg-white w-full z-9999 flex shrink-0 items-center justify-between gap-3'>
                <div className='flex-1'>
                    <FaCamera className='text-3xl text-[#63C48C]' />
                </div>
                <div className='flex-10'></div>
                <div className='flex-1 flex justify-end'>
                    <IoIosSend className='text-3xl text-[#002DE3]' />
                </div>
            </div>
        </div>
    )
}

export default ChatInbox
