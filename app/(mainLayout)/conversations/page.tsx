import { auth } from "@/auth"
import ConversationList from "@/components/ConversationList"
import { IUser } from "@/types/userTypes"

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
