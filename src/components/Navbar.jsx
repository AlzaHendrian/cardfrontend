import { useState } from "react"
import { Link } from "react-router-dom"
import Login from "./Auth/Login"
import Register from "./Auth/Register"

const Navbar = () => {
    const [login, setLogin] = useState(false)
    const[register, setRegister] = useState(false)

    const handleLogin = () => {
        setLogin(true)
        console.log(login)
    }

    const handleRegister = () => {
        setRegister(true)
        console.log(register)
    }
    
    return (
        <>
        <nav className=" flex justify-between bg-zinc-900">
            <ul className="flex text-white ml-12 m-auto">
                <Link className=" mr-4" to={'/'}>Home</Link>
                <Link className=" mr-4" to={'/tv-series'}>Tv Show</Link>
                <Link to={'/movies'}>Movies</Link>
            </ul>
            <div className=" p-4">
                <img src ={require("../img/logo.png")}/>
            </div>
            <div className="text-white mr-12 text-center m-auto">
                <button className="mr-6 bg-white py-1 px-5 text-red-600 rounded-md" onClick={handleRegister}>Register</button>
                <button className="bg-red-600 py-1 px-6 rounded-md" onClick={handleLogin}>Login</button>
            </div>
            
        {login && <Login showLogin={setLogin} />}
        {register && <Register showRegist={setRegister} />}
        </nav>
        </>
    )
}

export default Navbar