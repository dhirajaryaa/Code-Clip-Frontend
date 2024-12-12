import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu.jsx";
import { LogOut, Settings, User } from "lucide-react";


function UserAvatar({ className }) {

    const user = {
        name: "Dhiraj Arya",
        avatar: "https://avatars.githubusercontent.com/u/167156303?v=4"
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className={`border-2 border-violet-600 p-[2px] hover:border-violet-500 cursor-pointer duration-300 shadow-lg ${className}`}>
                    <AvatarImage className="rounded-full" src={user.avatar} />
                    <AvatarFallback>{user.name.split(" ")[0]}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default UserAvatar