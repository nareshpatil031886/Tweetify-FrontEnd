import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, LinkIcon, MapPin } from 'lucide-react'
import Tweet from '../components/Tweet'

export default function Profile() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <img src="/placeholder-cover.jpg" alt="Cover" className="w-full h-48 object-cover" />
        <div className="absolute top-36 left-4 p-1 bg-white dark:bg-gray-900 rounded-full">
          <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-900">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="px-4">
        <div className="flex justify-between items-start mt-16 sm:mt-2">
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-500 dark:text-gray-400">@johndoe</p>
          </div>
          <Button>Edit Profile</Button>
        </div>
        <p className="mt-4">Web developer, coffee enthusiast, and amateur photographer. Tweeting about tech, life, and everything in between.</p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            San Francisco, CA
          </div>
          <div className="flex items-center">
            <LinkIcon className="w-4 h-4 mr-1" />
            <a href="https://johndoe.com" className="text-blue-500 hover:underline">johndoe.com</a>
          </div>
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-1" />
            Joined September 2010
          </div>
        </div>
        <div className="flex gap-4 mt-4 text-sm">
          <span><strong>1,234</strong> Following</span>
          <span><strong>5,678</strong> Followers</span>
        </div>
      </div>
      <Tabs defaultValue="tweets" className="px-4">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="tweets">Tweets</TabsTrigger>
          <TabsTrigger value="replies">Replies</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        <TabsContent value="tweets" className="space-y-4 mt-4">
          <Tweet
            username="johndoe"
            handle="@johndoe"
            content="Just launched my new portfolio website! Check it out and let me know what you think."
            likes={50}
            retweets={10}
            comments={5}
          />
          <Tweet
            username="johndoe"
            handle="@johndoe"
            content="Excited to start my new project using React and Next.js. Stay tuned for updates!"
            likes={75}
            retweets={15}
            comments={8}
          />
        </TabsContent>
        <TabsContent value="replies" className="space-y-4 mt-4">
          <Tweet
            username="johndoe"
            handle="@johndoe"
            content="@techconference Thanks for having me! It was a great experience presenting at the conference."
            likes={30}
            retweets={5}
            comments={2}
          />
          <Tweet
            username="johndoe"
            handle="@johndoe"
            content="@webdevtips Great article! I've been using that technique in my recent projects and it's been a game-changer."
            likes={20}
            retweets={3}
            comments={1}
          />
        </TabsContent>
        <TabsContent value="media" className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <img src="/placeholder-image1.jpg" alt="Media 1" className="w-full h-40 object-cover rounded-lg" />
            <img src="/placeholder-image2.jpg" alt="Media 2" className="w-full h-40 object-cover rounded-lg" />
            <img src="/placeholder-image3.jpg" alt="Media 3" className="w-full h-40 object-cover rounded-lg" />
            <img src="/placeholder-image4.jpg" alt="Media 4" className="w-full h-40 object-cover rounded-lg" />
            <img src="/placeholder-image5.jpg" alt="Media 5" className="w-full h-40 object-cover rounded-lg" />
            <img src="/placeholder-image6.jpg" alt="Media 6" className="w-full h-40 object-cover rounded-lg" />
          </div>
        </TabsContent>
        <TabsContent value="likes" className="space-y-4 mt-4">
          <Tweet
            username="techguru"
            handle="@techguru"
            content="10 essential VS Code extensions for web developers"
            likes={200}
            retweets={50}
            comments={20}
          />
          <Tweet
            username="designinspo"
            handle="@designinspo"
            content="Check out these amazing UI design trends for 2023!"
            likes={150}
            retweets={30}
            comments={15}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

