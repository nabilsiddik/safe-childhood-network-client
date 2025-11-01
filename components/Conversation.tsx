import { IUser } from "@/types/userTypes"
import Image from "next/image"

const Conversation = ({friend}: {
    friend?: IUser
}) => {

  if(!friend) return null

  return (
    <div className="py-4 px-5 bg-gray-200 rounded-lg mb-3 flex items-center gap-4">
       <Image className="rounded-full" src={friend?.profilePhoto || '/images/chat_images/user.png'} alt="friend profile phoro" width={70} height={70}/>
      <h3 className='font-bold text-lg'>{friend?.fullName}</h3>
    </div>
  )
}

export default Conversation
