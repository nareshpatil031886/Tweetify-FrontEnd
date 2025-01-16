import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const conversations = [
  { id: 1, user: 'Alice', lastMessage: 'Hey, how are you?' },
  { id: 2, user: 'Bob', lastMessage: 'Did you see the game last night?' },
  { id: 3, user: 'Charlie', lastMessage: 'Meeting at 3pm today' },
]

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null)

  return (
    <div className="flex h-[calc(100vh-6rem)]">
      <div className="w-1/3 border-r overflow-y-auto">
        <h2 className="text-2xl font-bold p-4">Messages</h2>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`p-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ${
              selectedConversation === conversation.id ? 'bg-gray-200 dark:bg-gray-700' : ''
            }`}
            onClick={() => setSelectedConversation(conversation.id)}
          >
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={`/placeholder-${conversation.user}.jpg`} alt={conversation.user} />
                <AvatarFallback>{conversation.user[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{conversation.user}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{conversation.lastMessage}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-grow flex flex-col">
        {selectedConversation ? (
          <>
            <div className="flex-grow p-4 overflow-y-auto">
              {/* Message content would go here */}
            </div>
            <div className="p-4 border-t">
              <form className="flex space-x-2">
                <Input placeholder="Type a message..." className="flex-grow" />
                <Button type="submit">Send</Button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  )
}

