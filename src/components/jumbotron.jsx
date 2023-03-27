const Jumbotron = () => {
    return (
        <div className="relative">
            <img className="w-full h-auto" src ={require("../img/Jumbotron.png")}/>
            <img className="absolute inset-0 mt-40 z-10 ml-36" src ={require("../img/thewitcher.png")}/>
            <img className="absolute inset-0 mt-64 z-10 ml-36" src ={require("../img/text.png")}/>
            <img className="absolute inset-0 mt-80 z-10 ml-36 py-1.5" src ={require("../img/2019.png")}/>
            <a href="#"><img className="absolute inset-0 mt-80 z-10 ml-52 border-solid border-2 border-white py-1 px-4 rounded-md" src ={require("../img/kategory1.png")}/></a>
            <a href="#"><img className="absolute inset-0 mt-96 z-10 ml-36 border-solid border-2 border-white rounded-md" src ={require("../img/button.png")}/></a>
        </div>
    )
}

export default Jumbotron