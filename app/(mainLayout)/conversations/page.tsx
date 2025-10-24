import { auth } from "@/auth"
import Conversation from "@/components/Conversation"
import ConversationList from "@/components/ConversationList"
import { IConversation, IUser } from "@/types/userTypes"
import Link from "next/link"

const Conversations = async () => {

    const session = await auth()
    const user = session?.user

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/conversation/${user?.email || ''}`)

    const data = await res.json()
    const conversations = data?.data

    return (
        <div>
            <ConversationList conversations = {conversations} user = {user as IUser}/>
        </div>
    )
}

export default Conversations
