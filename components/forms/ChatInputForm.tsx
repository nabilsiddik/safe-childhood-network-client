'use client'

import { useState } from "react"

const ChatInputForm = ({ id, conversationId, sender }: { id: string, conversationId: string, sender: string }) => {

    const [message, setMessage] = useState('')

    const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const messageData = {
            conversationId,
            sender,
            text: message
        }


        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messageData)
            })
            const data = await res.json()

            if(data?.success){
                setMessage('')
            }

        } catch (err) {
            console.log('Error while sending message', err)
        }

    }

    return (
        <form id={id} onSubmit={handleSendMessage}>
            <input onChange={(e) => setMessage(e.target.value)} value={message} name="message" className='w-full focus:outline-none border-0 text-[#515151] font-medium' type="text" placeholder='Type your message ...' />
        </form>
    )
}

export default ChatInputForm
