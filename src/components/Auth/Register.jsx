const Register = (props) => {

    return (
        <>
        <div className='absolute z-20 bg-transparent-60 w-full h-full'>
            <div className="w-[350px] z-50 p-6 m-auto bg-zinc-900 rounded-md shadow-md lg:max-w-xl mt-32">
                <h1 className="text-3xl font-semibold text-white">
                Register
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <input type="email" placeholder='Enter your Email' className="block w-full px-4 py-2 mt-2 text-white bg-neutral-500 border rounded-md focus:ring-white focus:outline-none focus:ring focus:ring-opacity-90"/>
                    </div>
                    <div className="mb-2">
                        <input type="password" placeholder='Enter your Password' className="block w-full px-4 py-2 mt-2 text-white bg-neutral-500 border rounded-md focus:ring-white focus:outline-none focus:ring focus:ring-opacity-90"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder='Enter your Fullname' className="block w-full px-4 py-2 mt-2 text-white bg-neutral-500 border rounded-md focus:ring-white focus:outline-none focus:ring focus:ring-opacity-90"/>
                    </div>
                    <div className="mb-2">
                        <select name="" id="" className="block w-full px-4 py-2 mt-2 text-white bg-neutral-500 border rounded-md focus:ring-white focus:outline-none focus:ring focus:ring-opacity-90">
                            <option value="Men">Men</option>
                            <option value="Wowan">Woman</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <input type="number" placeholder='Enter your Phone' className="block w-full px-4 py-2 mt-2 text-white bg-neutral-500 border rounded-md focus:ring-white focus:outline-none focus:ring focus:ring-opacity-90"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder='Enter your Address' className="block w-full px-4 py-2 mt-2 text-white bg-neutral-500 border rounded-md focus:ring-white focus:outline-none focus:ring focus:ring-opacity-90"/>
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-900 focus:outline-none focus:bg-red-500">
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-sm font-bold text-center text-gray-400">
                    {" "}
                    Don't have an account? Click {" "}
                    <a href="#" className="font-medium text-gray-300 hover:underline">Here</a>
                </p>
            </div>
                <div onClick={() => props.showRegist(false)} className="absolute left-0 top-0 -z-20 -inset-x-0.5 flex flex-col justify-center h-full w-full overflow-hidden">
                </div>
            
        </div>
            
        </>
    )
}

export default Register