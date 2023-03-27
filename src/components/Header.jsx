const Header = () => {
    return (
    <nav className=" flex justify-between bg-zinc-900">
        <ul className="flex text-white ml-12 m-auto">
            <li className=" mr-4"><a href="#">Home</a></li>
            <li className=" mr-4"><a href="#">Tv Show</a></li>
            <li><a href="#">Movies</a></li>
        </ul>
        <div className=" p-4">
            <img src ={require("../img/logo.png")}/>
        </div>
        <div className="text-white mr-12 text-center m-auto">
            <a className="mr-6 bg-white py-1 px-5 text-red-600 rounded-md" href="#">Register</a>
            <a className="bg-red-600 py-1 px-6 rounded-md" href="#">Login</a>
        </div>
    </nav>
    )
}

export default Header