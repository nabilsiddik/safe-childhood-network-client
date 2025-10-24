'use client'

import { IMessage, IUser } from '@/types/userTypes'
import React, { useEffect, useRef } from 'react'
import Message from './Message'

const ChatMessagesList = ({ messages, user }: { messages: IMessage[], user: IUser }) => {

    const bottomRef = useRef<HTMLDivElement | null>(null)
    const firstLoad = useRef(true);

    useEffect(() => {
        if (firstLoad.current) {
            bottomRef.current?.scrollIntoView({ behavior: "auto" });
            firstLoad.current = false;
        } else {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages])

    return (
        <div className='bg-[#d2edf7] backdrop-blur-lg flex-1 p-5 overflow-y-auto max-h-screen no-scrollbar pt-30 pb-20'>
            {(messages && messages.length > 0) && messages.map((message: IMessage) => {
                return <Message key={message?._id} message={message} own={message?.sender === user?.email} />
            })}
            <div ref={bottomRef}></div>
        </div>
    )
}

export default ChatMessagesList
