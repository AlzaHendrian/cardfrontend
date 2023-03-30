const Shows = () => {
    return (
        <>
        <div className="relative">
            <img className="w-[100%] h-auto top-0;" src="/shows-img/hacker.png"/>
            <div className="absolute inset-0 mt-40 ml-36">
                <img src="/shows-img/title-hacker.png"/>
                <p className="text-white flex justify-between w-[537px] h-[108px] left-[150px] top-[300px] mt-10">Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.</p>
                <div className="flex mt-3">
                    <p className="text-white mr-4">
                        2019
                    </p>
                    <p className="text-white border px-4 rounded-sm">
                        Movies
                    </p>
                </div>
                <button className="text-white mt-5 bg-red-700 px-14 py-2 rounded-sm">
                    WATCH NOW!
                </button>
            </div>
        </div>
        </>
    )
}

export default Shows