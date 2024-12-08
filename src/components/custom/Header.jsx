import React from 'react'
import Logo from "../../assets/logo.png"
import { Button } from '../ui/button'

function Header() {
    const [isLogin,setIsLogin] = React.useState(false);
    return (
        <header className='py-4'>
            <div className="container mx-auto flex items-center justify-between">
                <div className='flex items-center justify-start gap-2'>
                    <img src={Logo} alt="Code Clip" className='size-12' />
                    <h1 className='uppercase tracking-tight text-4xl font-bold text-violet-600'>Code <span className='text-gray-400'>Clip</span></h1>
                </div>
                <div className='flex items-center justify-start gap-2'>

                    <Button variant="outline" className="border-2">Sign up</Button>
                    <Button className="bg-violet-600">Sign in</Button>
                </div>
            </div>
        </header>
    )
}

export default Header