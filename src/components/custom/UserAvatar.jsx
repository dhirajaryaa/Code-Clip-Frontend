import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

function UserAvatar({ className }) {
    return (
        <Avatar className={`border-2 border-violet-600 p-[2px] hover:border-violet-500 duration-300 shadow-lg ${className}`}>
            <AvatarImage className="rounded-full" src="https://avatars.githubusercontent.com/u/167156303?v=4" />
            <AvatarFallback>DA</AvatarFallback>
        </Avatar>
    )
}

export default UserAvatar