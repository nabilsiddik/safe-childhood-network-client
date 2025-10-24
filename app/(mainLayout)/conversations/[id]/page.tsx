import { auth } from '@/auth';
import ChatMessagesList from '@/components/ChatMessagesList';
import ChatInputForm from '@/components/forms/ChatInputForm';
import Message from '@/components/Message';
import { Button } from '@/components/ui/button';
import { IMessage, IUser } from '@/types/userTypes';
import Image from 'next/image'
import React from 'react'
import { FaCamera } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const ChatInbox = async ({ params }: { params: { id: string } }) => {
    const session = await auth()
    const user = session?.user
    const { id } = params

    console.log(id, 'my id')

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
            <ChatMessagesList messages = {messages} user = {user as IUser}/>

            <div className='container mx-auto px-10 fixed bottom-0 left-0 right-0 h-20 bg-white w-full z-9999 flex shrink-0 items-center justify-between gap-3'>
                <div className='flex-1'>
                    <FaCamera className='text-3xl text-[#63C48C]' />
                </div>
                <div className='flex-10'>
                    <ChatInputForm id={'chatForm'} conversationId = {id} sender = {user?.email as string} />
                </div>
                <div className='flex-1 flex justify-end'>
                    <Button form='chatForm' type={'submit'} className='bg-transparent hover:bg-transparent border-none cursor-pointer'>
                        <IoIosSend className='text-5xl text-[#002DE3]' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChatInbox
