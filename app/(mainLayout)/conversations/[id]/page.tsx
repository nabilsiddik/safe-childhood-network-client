import { auth } from '@/auth';
import ChatInboxClient from '@/components/ChatInboxClient';
import { IUser } from '@/types/userTypes';
import React from 'react'

const ChatInbox = async ({ params }: { params: { id: string } }) => {
    const session = await auth()
    const user = session?.user
    const { id } = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/message/${id}`)
    const data = await res.json()
    const messages = data?.data

    return (
        <div className='md:container md:mx-auto md:px-5 min-h-screen flex flex-col justify-between relative'>
            {/* chat list  */}
            <ChatInboxClient messages={messages} user={user as IUser} conversationId={id} />
        </div>
    )
}

export default ChatInbox
