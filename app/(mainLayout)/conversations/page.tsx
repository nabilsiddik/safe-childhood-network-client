import { auth } from "@/auth"
import Conversation from "@/components/Conversation"
import { IConversation } from "@/types/userTypes"
import Link from "next/link"

const Conversations = async () => {

    const session = await auth()
    const user = session?.user

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/conversation/${user?.email || ''}`)

    const data = await res.json()
    const conversations = data?.data

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

export default Conversations
