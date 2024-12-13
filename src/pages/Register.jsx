import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Link } from 'react-router-dom';
import { ChevronLeft, HomeIcon } from 'lucide-react';

const Register = () => {
    return (
        <main className='flex justify-start flex-col items-center h-screen w-full gap-5'>
            {/* topbar  */}
            <nav className='flex items-center justify-between px-4 py-1 w-full mt-3'>
                <Link to='/'>
                    <Button variant="outline" size="icon">
                        <ChevronLeft />
                    </Button>
                </Link>
                <Link to={"/dashboard"}>
                <Button >
                    <HomeIcon /> Dashboard
                </Button>
                </Link>
            </nav>
            <div className="flex-1 flex justify-center items-center">

                <Card className="mx-auto max-w-sm w-full shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl">Register</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-2">

                                <div className="grid gap-2">
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input
                                        id="fullName"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="username">UserName</Label>
                                    <Input
                                        id="username"
                                        type="text"
                                        placeholder="johndoe"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="test@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required placeholder="123@abc" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cnf-password">Confirm Password</Label>
                                <Input id="cnf-password" type="password" required placeholder="123@abc" />
                            </div>
                            <Button type="submit" className="w-full shadow-lg">
                                Register
                            </Button>
                            <Button variant="outline" className="w-full shadow-lg">
                                Signup with Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don't have an account?{' '}
                            <Link to="/login" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </main>
    );
}

export default Register;