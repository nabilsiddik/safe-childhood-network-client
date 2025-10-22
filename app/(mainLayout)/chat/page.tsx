
const page = () => {
  return (
    <div>
      chat
    </div>
  )
}

export default page


// "use client"

// import { useState } from "react"
// import { FiSearch, FiSend } from "react-icons/fi"

// export default function chat() {
//   const [selectedChat, setSelectedChat] = useState(0)

//   const chats = [
//     { id: 1, name: "+880 1604-423190", message: "kalke check diboni abar", time: "9:59 PM", unread: 0, image: "/avatar1.png" },
//     { id: 2, name: "Muhin Vai SCN", message: "📷 Photo", time: "9:40 PM", unread: 0, image: "/avatar2.png" },
//     { id: 3, name: "Internify Internships", message: "Get Perplexity Pro Free!", time: "6:57 PM", unread: 3, image: "/avatar3.png" },
//   ]

//   const messages = [
//     { id: 1, sender: "them", text: "Assistance Needed...", time: "12:25 AM" },
//     { id: 2, sender: "them", text: "Ei mail e thakar kotha na?", time: "12:26 AM" },
//     { id: 3, sender: "me", text: "Okay, Thanks", time: "12:28 AM" },
//     { id: 4, sender: "them", text: "Nabil kono update asche?", time: "9:58 PM" },
//     { id: 5, sender: "me", text: "nah, ekhono ashe nai", time: "9:59 PM" },
//   ]

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* LEFT SIDEBAR */}
//       <div className="hidden md:flex flex-col w-1/3 lg:w-1/4 border-r border-gray-300 bg-white">
//         {/* Header */}
//         <div className="p-4 border-b font-semibold text-lg">Chats</div>

//         {/* Search */}
//         <div className="p-3">
//           <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
//             <FiSearch className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search or start new chat"
//               className="ml-2 bg-transparent w-full outline-none text-sm"
//             />
//           </div>
//         </div>

//         {/* Chat List */}
//         <div className="flex-1 overflow-y-auto">
//           {chats.map((chat, index) => (
//             <div
//               key={chat.id}
//               onClick={() => setSelectedChat(index)}
//               className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 ${
//                 selectedChat === index ? "bg-gray-200" : ""
//               }`}
//             >
//               <img
//                 src={chat.image}
//                 alt={chat.name}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-sm font-semibold">{chat.name}</h3>
//                   <span className="text-xs text-gray-500">{chat.time}</span>
//                 </div>
//                 <p className="text-sm text-gray-500 truncate">{chat.message}</p>
//               </div>
//               {chat.unread > 0 && (
//                 <div className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {chat.unread}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT CHAT AREA */}
//       <div className="flex flex-col flex-1 bg-gray-50">
//         {/* Chat Header */}
//         <div className="flex items-center justify-between border-b border-gray-300 p-4 bg-white">
//           <div className="flex items-center gap-3">
//             <img
//               src={chats[selectedChat].image}
//               alt="avatar"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <h3 className="font-semibold text-sm md:text-base">
//                 {chats[selectedChat].name}
//               </h3>
//               <p className="text-xs text-gray-500">last seen today at 9:58 PM</p>
//             </div>
//           </div>
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-1 overflow-y-auto bg-chat-pattern p-4 space-y-3">
//           {messages.map((msg) => (
//             <div
//               key={msg.id}
//               className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
//             >
//               <div
//                 className={`rounded-lg px-3 py-2 max-w-[80%] text-sm shadow-sm ${
//                   msg.sender === "me"
//                     ? "bg-green-100 text-gray-800"
//                     : "bg-white text-gray-800"
//                 }`}
//               >
//                 <p>{msg.text}</p>
//                 <p className="text-[10px] text-gray-500 text-right mt-1">{msg.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Message Input */}
//         <div className="p-3 border-t bg-white flex items-center gap-3">
//           <input
//             type="text"
//             placeholder="Type a message"
//             className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none text-sm"
//           />
//           <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
//             <FiSend size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Bottom Chat List (drawer style) */}
//       <div className="fixed md:hidden bottom-0 left-0 right-0 border-t bg-white flex justify-around py-2">
//         {chats.map((chat, index) => (
//           <button
//             key={chat.id}
//             onClick={() => setSelectedChat(index)}
//             className={`flex flex-col items-center text-xs ${
//               selectedChat === index ? "text-green-600" : "text-gray-500"
//             }`}
//           >
//             <img
//               src={chat.image}
//               alt={chat.name}
//               className="w-8 h-8 rounded-full"
//             />
//             <span className="truncate w-12">{chat.name.slice(0, 5)}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }
