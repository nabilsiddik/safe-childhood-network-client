'use client'

import { useState } from 'react'

const ChatInputForm = ({ sendMessage, id }: { sendMessage: (msg: string) => void , id: string}) => {
    const [message, setMessage] = useState('')

    const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (message.trim() === '') return

        sendMessage(message)
        setMessage('')
    }

    return (
        <form id={id} onSubmit={handleSend}>
            <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="w-full focus:outline-none border-0 text-[#515151] font-medium"
            />
        </form>
    )
}

export default ChatInputForm
