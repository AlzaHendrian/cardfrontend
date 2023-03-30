import React from 'react';
import { useState, useEffect } from 'react';

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (email && password) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [email, password])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Email: ${email}, Password: ${password}`)
    }

    return (
        <>
        <div className='absolute z-20 bg-transparent-60 w-full h-full'>
                <div className="w-[350px] z-50 p-6 m-auto bg-zinc-900 rounded-md shadow-md lg:max-w-xl mt-32">
                    <h1 className="text-3xl font-semibold text-white">
                    Login
                    </h1>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="mb-2">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' className="block w-full px-4 py-2 mt-2 text-white bg-neutral-500 border rounded-md focus:ring-white focus:outline-none focus:ring focus:ring-opacity-90"/>
                        </div>
                        <div className="mb-2">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' className="block w-full px-4 py-2 mt-2 text-white bg-neutral-500 border rounded-md focus:ring-white focus:outline-none focus:ring focus:ring-opacity-90"/>
                        </div>
                        <div className="mt-6">
                            <button disabled={!isValid} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-900 focus:outline-none focus:bg-red-500">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-sm font-bold text-center text-gray-400">
                        {" "}
                        Don't have an account? Click {" "}
                        <a href="#" className="font-medium text-gray-300 hover:underline">Here</a>
                    </p>
                </div>
            
                <div onClick={() => props.showLogin(false)} className="absolute left-0 top-0 -z-20 -inset-x-0.5 flex flex-col justify-center h-full w-full overflow-hidden">
                </div>
            </div>
            
        </>
    );
}