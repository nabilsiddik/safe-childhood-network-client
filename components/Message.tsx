import { IMessage } from './../types/userTypes/index';
import {format} from 'timeago.js'

const Message = ({message, own}: {message: IMessage, own: boolean}) => {
    return (
        <div className={`mb-10 flex flex-col ${own && 'items-end'}`}>
            <div className={`${own ? 'bg-[#718FF9] text-white rounded-br-none' : 'bg-[#00FF6C78] rounded-bl-none'} p-7 rounded-lg  max-w-10/12 lg:max-w-6/12 xl:max-w-4/12 mb-2`}>
                <p>{message?.text}</p>
            </div>
            <div className='mt-1 text-[#515151]'>{format(message?.createdAt)}</div>
        </div>
    )
}

export default Message
