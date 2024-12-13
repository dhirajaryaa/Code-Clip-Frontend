import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Link } from 'react-router-dom';
import { ChevronLeft, HomeIcon } from 'lucide-react';

const Login = () => {
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

                <Card className="mx-auto max-w-sm shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
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
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link href="#" className="ml-auto inline-block text-sm underline">
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full shadow-lg">
                                Login
                            </Button>
                            <Button variant="outline" className="w-full shadow-lg">
                                Login with Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don't have an account?{' '}
                            <Link to="/register" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

export default Login;