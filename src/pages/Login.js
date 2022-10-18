import { useState } from 'react';

import { Button } from '../components/Button.js';

function Login() {

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    function handleUser(e, dist) {
        var copiedUser = { ...user };
        if (dist === "username") {
            copiedUser.username = e.target.value;
        } else if (dist === "password") {
            copiedUser.password = e.target.value;
        }
        setUser(user => ({
            ...copiedUser
        }));
    }

    return (
        <div className="h-screen bg-fha flex items-center justify-center">
            <div>
                <div className="w-80 h-full px-6 pb-20">
                    <div className="pb-24">
                        <p className="text-center text-white text-3xl font-bold">Camel Republic</p>
                        <p className="text-right text-white text-sm pr-[26px]">SENIOR PROJECT</p>
                    </div>
                    <div>
                        <div className="pb-6">
                            <p className="text-white pb-2">Username</p>
                            <input className="w-full py-2 px-4 rounded-md"
                                placeholder="username"
                                onChange={(e) => handleUser(e, "username")} />
                        </div>
                        <div className="pb-6">
                            <p className="text-white pb-2">Password</p>
                            <input className="w-full py-2 px-4 rounded-md"
                                placeholder="password"
                                onChange={(e) => handleUser(e, "password")} />
                        <p className="text-right text-sm text-white pt-2 hover:underline">Forget Password?</p>
                        </div>

                        <Button text="Login" user={user} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;