'use client'

import { useEffect, useState } from 'react'
import { IMessage, IUser } from '@/types/userTypes'
import ChatMessagesList from '@/components/ChatMessagesList'
import ChatInputForm from '@/components/forms/ChatInputForm'
import { io, Socket } from 'socket.io-client'
import Image from 'next/image'
import { FaCamera } from 'react-icons/fa6'
import { Button } from './ui/button'
import { IoIosSend } from 'react-icons/io'

const ChatInboxClient = ({ messages: initialMessages, user, conversationId }: { messages: IMessage[], user: IUser, conversationId: string }) => {
    const [socket, setSocket] = useState<Socket | null>(null)
    const [messages, setMessages] = useState<IMessage[]>(initialMessages)
    const [conversation, setConversation] = useState<string[] | []>([])
    const [friend, setFriend] = useState<IUser | null>(null)

    useEffect(() => {
        const newSocket = io('http://localhost:5000') // backend port
        setSocket(newSocket)

        // Join the socket with user's email
        newSocket.emit('join', user.email)

        // Listen for incoming messages
        newSocket.on('receiveMessage', (message: IMessage) => {
            if (message.conversationId === conversationId) {
                setMessages(prev => [...prev, message])
            }
        })

        return () => {
            newSocket.disconnect()
        }
    }, [user.email, conversationId])


    useEffect(() => {
        const getConversation = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/conversation/${user?.email}`)
                const data = await res.json()
                setConversation(data.data[0].members)
            } catch (err) {
                console.log('Error while fetching conversation', err)
            }
        }
        getConversation()
    }, [user?.email, conversationId])

    useEffect(() => {
        const getFriend = async () => {
            const friendEmail = conversation.find((memberEmail) => memberEmail != user?.email)
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${friendEmail}`)
                const data = await res.json()
                setFriend(data?.data)
            } catch (err) {
                console.log('Error while fetching conversation', err)
            }
        }
        getFriend()
    }, [user?.email, conversationId, conversation])

    const sendMessage = (message: string) => {
        if (!socket) return
        socket.emit('sendMessage', {
            conversationId,
            sender: user.email,
            text: message
        },
            (response: { success: boolean; error?: string }) => {
                if (response.success) {
                    console.log('Message delivered successfully');
                } else {
                    console.error('Failed to send message:', response.error);
                }
            }
        )
    }

    return (
        <div className='container mx-auto min-h-screen flex flex-col justify-between relative'>
            <div className='container mx-auto fixed top-0 left-0 right-0 w-full bg-white h-20 flex items-center gap-3 px-5 z-10'>
                <Image className='rounded-full' src={friend?.profilePhoto || '/images/chat_images/user.png'} width={50} height={50} alt='scn logo' />
                <h3 className='text-xl font-bold'>{friend?.fullName}</h3>
            </div>

            <ChatMessagesList messages={messages} user={user} />

            <div className='container mx-auto px-10 fixed bottom-0 left-0 right-0 h-20 bg-white w-full z-9999 flex shrink-0 items-center justify-between gap-3'>
                <div className='flex-1'>
                    <FaCamera className='text-3xl text-[#63C48C]' />
                </div>
                <div className='flex-10'>
                    <ChatInputForm sendMessage={sendMessage} id={'chatForm'} />
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

export default ChatInboxClient
