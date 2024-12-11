import { useState } from 'react'
import { Button } from '../ui/button'
import { Logo, UserAvatar } from "./index.js";

function Header() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <header className='p-3 sticky top-0 z-50 bg-indigo-100/40 backdrop-blur-md w-full '>
            <div className="container mx-auto flex items-center justify-between py-2">
                {/* logo  */}
                <a href="/">
                <Logo />
                </a>
                <div className='flex items-center justify-start gap-2'>
                    {
                        isLogin ? (
                            <UserAvatar />
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