import { IMessage } from './../types/userTypes/index';
import {format} from 'timeago.js'

const Message = ({message, own}: {message: IMessage, own: boolean}) => {
    return (
        <div className={`mb-7 flex flex-col ${own && 'items-end'}`}>
            <div className={`${own ? 'text-white flex flex-row items-center px-6 py-5 gap-[10px] bg-[#718FF9] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[4px] rounded-bl-[16px] flex-none order-0 grow-0' : 'flex flex-row items-center px-6 py-5 gap-[10px] bg-[rgba(0,255,108,0.47)] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[4px] flex-none order-0 grow-0 '} p-5 rounded-lg  max-w-10/12 lg:max-w-6/12 xl:max-w-4/12`}>
                <p>{message?.text}</p>
            </div>
            <div className='text-[#515151]'>{format(message?.createdAt)}</div>
        </div>
    )
}

export default Message
