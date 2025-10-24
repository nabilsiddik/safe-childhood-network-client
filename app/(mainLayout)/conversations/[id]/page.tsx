import { auth } from '@/auth';
import ChatInboxClient from '@/components/ChatInboxClient';
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
    const { id } = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/message/${id}`)
    const data = await res.json()
    const messages = data?.data

    return (
        <div className='container mx-auto px-5 min-h-screen flex flex-col justify-between relative'>
            {/* chat list  */}
            <ChatInboxClient messages={messages} user={user as IUser} conversationId={id} />
        </div>
    )
}

export default ChatInbox
