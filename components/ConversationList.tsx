'use client'

import { IConversation, IUser } from '@/types/userTypes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Conversation from './Conversation'

const ConversationList = ({ conversations, user }: { conversations: IConversation[], user: IUser }) => {
    const [friendsMap, setFriendsMap] = useState<Record<string, IUser>>({})

    useEffect(() => {
        const fetchFriends = async () => {
            const newMap: Record<string, IUser> = {}
            for (const conv of conversations) {
                const friendEmail = conv.members.find(email => email !== user.email)
                if (!friendEmail) continue
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${friendEmail}`)
                    const data = await res.json()
                    newMap[conv._id] = data?.data
                } catch (err) {
                    console.log('Error fetching friend:', err)
                }
            }
            setFriendsMap(newMap)
        }

        fetchFriends()
    }, [conversations, user.email])

    return (
        <div className="container mx-auto px-5 pt-[120px]">
            {conversations.map((conv: IConversation) => (
                <Link href={`/conversations/${conv._id}`} key={conv._id}>
                    <Conversation friend={friendsMap[conv._id]} />
                </Link>
            ))}
        </div>
    )
}

export default ConversationList
