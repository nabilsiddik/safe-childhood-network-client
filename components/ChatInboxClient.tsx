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
        const newSocket = io('https://safe-childhood-network.onrender.com') // backend port
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
        <div className='min-h-screen flex flex-col justify-between relative'>
            <div className='container mx-auto fixed top-0 left-0 right-0 w-full bg-white h-20 flex items-center gap-3 px-5 z-10'>
                <Image className='rounded-full' src={friend?.profilePhoto || '/images/chat_images/user.png'} width={50} height={50} alt='scn logo' />
                <h3 className='text-xl font-bold'>{friend?.fullName}</h3>
            </div>

            <ChatMessagesList messages={messages} user={user} />

            <div className='container mx-auto px-10 fixed bottom-0 left-0 right-0 h-20 bg-white w-full z-9999 flex shrink-0 items-center justify-between gap-3'>
                <div className='flex-1'>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7679 11.9048C22.1145 11.9048 21.5778 11.3496 21.5778 10.6654C21.5778 9.98127 22.1003 9.42602 22.7537 9.42602H22.7679C23.4214 9.42602 23.9517 9.98127 23.9517 10.6654C23.9517 11.3496 23.4214 11.9048 22.7679 11.9048ZM15.0008 22.8842C11.6105 22.8842 8.85306 19.9956 8.85306 16.446C8.85306 12.898 11.6105 10.011 15.0008 10.011C18.3911 10.011 21.1485 12.898 21.1485 16.446C21.1485 19.9956 18.3911 22.8842 15.0008 22.8842ZM23.8696 5.08979C23.6029 5.00221 23.2146 4.81878 22.8879 4.44365C22.7521 4.28831 22.5691 3.89997 22.3923 3.5265C21.9156 2.5168 21.2637 1.13529 19.9521 0.556905C18.2664 -0.183428 11.7951 -0.186733 10.0542 0.5536C8.75993 1.1105 8.10017 2.49863 7.61877 3.51163C7.43726 3.89171 7.25101 4.28501 7.11212 4.44365C6.78697 4.82043 6.3987 5.00221 6.15721 5.08318C0.953333 6.59029 0 10.1317 0 16.56C0 25.8538 2.16552 30 15.0008 30C27.8345 30 30 25.8538 30 16.56C30 10.1317 29.0482 6.59029 23.8696 5.08979Z" fill="#63C48C" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.001 12.489C12.916 12.489 11.2208 14.2638 11.2208 16.4468C11.2208 18.6298 12.916 20.4046 15.001 20.4046C17.086 20.4046 18.7812 18.6298 18.7812 16.4468C18.7812 14.2638 17.086 12.489 15.001 12.489Z" fill="#63C48C" />
                    </svg>
                </div>
                <div className='flex-10'>
                    <ChatInputForm sendMessage={sendMessage} id={'chatForm'} />
                </div>
                <div className='flex-1 flex justify-end'>
                    <button form='chatForm' type={'submit'} className='bg-transparent hover:bg-transparent border-none cursor-pointer'>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.1763 0.309437C25.0329 0.166714 24.8518 0.0678988 24.6541 0.0246085C24.4565 -0.0186819 24.2506 -0.00464748 24.0607 0.0650616L0.685687 8.56506C0.484097 8.64153 0.310539 8.77751 0.188066 8.95495C0.0655929 9.13239 0 9.34289 0 9.5585C0 9.7741 0.0655929 9.98461 0.188066 10.162C0.310539 10.3395 0.484097 10.4755 0.685687 10.5519L9.81256 14.1963L16.5488 7.43881L18.0469 8.93694L11.2788 15.7051L14.9338 24.8319C15.0125 25.0296 15.1488 25.1991 15.325 25.3185C15.5012 25.4378 15.7091 25.5015 15.9219 25.5013C16.1367 25.4969 16.345 25.4275 16.5195 25.3024C16.694 25.1772 16.8265 25.002 16.8994 24.8001L25.3994 1.42506C25.4718 1.23708 25.4893 1.03239 25.4498 0.834868C25.4103 0.637342 25.3154 0.455116 25.1763 0.309437Z" fill="#002DE3" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ChatInboxClient
