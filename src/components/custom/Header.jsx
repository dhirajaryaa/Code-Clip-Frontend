import { useState } from 'react'
import { Button } from '../ui/button'
import { Logo, UserAvatar } from "./index.js";
import { Link } from 'react-router-dom';
function Header() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <header className='p-3 sticky top-0 z-50 bg-indigo-100/40 backdrop-blur-md w-full '>
            <div className="container mx-auto flex items-center justify-between py-2">
                {/* Logo  */}
                <Logo Ref='/'/>
                <div className='flex items-center justify-start gap-2'>
                    {
                        isLogin ? (
                            <UserAvatar />
                        ) : (
                            <>
                            <Link to="/register">
                                <Button variant="outline" className="border-2 duration-300 hover:bg-violet-600/20 hover:border-violet-600/20 ">Sign up</Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="default">Sign in</Button>
                            </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header