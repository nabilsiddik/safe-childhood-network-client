import { IConversation, IUser } from "@/types/userTypes"
import Image from "next/image"

const Conversation = async({conversation, currentUserEmail}: {
    conversation: IConversation,
    currentUserEmail: string
}) => {

  const friendEmail = conversation.members.find((memberEmail) => memberEmail != currentUserEmail)

  let friend: IUser | null = null

  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${friendEmail}`)
    const data = await res.json()
    friend = data?.data
  }catch(err){
    console.log('Error while fetching friend user', err)
  }

  return (
    <div className="py-5 px-5 bg-gray-300 rounded-lg mb-3 flex items-center gap-4">
       <Image className="rounded-full" src={friend?.profilePhoto || '/images/chat_images/user.png'} alt="friend profile phoro" width={70} height={70}/>
      <h3 className='font-bold text-lg'>{friend?.fullName}</h3>
    </div>
  )
}

export default Conversation
