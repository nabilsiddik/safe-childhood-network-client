import { auth } from "@/auth"
import Conversation from "@/components/Conversation"
import { IConversation } from "@/types/userTypes"

const Conversations = async () => {

    const session = await auth()
    const user = session?.user

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/conversation/${user?.email || ''}`)

    const data = await res.json()
    const conversations = data?.data

    console.log(conversations, 'conversations')


    return (
        <div className="container mx-auto px-5 pt-[120px]">
            {conversations.map((conversation: IConversation) => {
                return <Conversation key={conversation?._id} conversation = {conversation} currentUserEmail = {user?.email as string || ''}/>
            })}
        </div>
    )
}

export default Conversations
