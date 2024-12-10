import { useState } from 'react'
import Logo from "../../assets/logo.png"
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function Header() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <header className='p-3 sticky top-0 z-50 bg-indigo-100/40 backdrop-blur-md w-full '>
            <div className="container mx-auto flex items-center justify-between py-2">
                <div className='flex items-center justify-start gap-2'>
                    <img src={Logo} alt="Code Clip" className='size-10' />
                    <h1 className='uppercase tracking-tight text-2xl font-bold text-violet-600'>Code <span className='text-gray-400'>Clip</span></h1>
                </div>
                <div className='flex items-center justify-start gap-2'>
                    {
                        isLogin ? (
                            <Avatar className="border-2 border-violet-600 p-[2px] shadow-lg">
                                <AvatarImage className="rounded-full" src="https://avatars.githubusercontent.com/u/167156303?v=4" />
                                <AvatarFallback>DA</AvatarFallback>
                            </Avatar>
                        ) : (
                            <>
                                <Button variant="outline" className="border-2 duration-300 hover:bg-violet-600/20 hover:border-violet-600/20 ">Sign up</Button>
                                <Button className="bg-violet-600 hover:bg-violet-500 ">Sign in</Button>
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header