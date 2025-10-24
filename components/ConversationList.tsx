'use client'

import { IConversation, IUser } from '@/types/userTypes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Conversation from './Conversation'

const ConversationList = ({ conversations, user }: { conversations: IConversation[], user: IUser }) => {

    return (
        <div className="container mx-auto px-5 pt-[120px]">
            {conversations.map((conversation: IConversation) => {
                return <Link href={`/conversations/${conversation?._id}`} key={conversation?._id}>
                    <Conversation conversation={conversation} currentUserEmail={user?.email as string || ''} />
                </Link>
            })}
        </div>
    )
}

export default ConversationList
