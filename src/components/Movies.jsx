import Cards from "./Cards"

const Movies = () => {
    return (
        <>
        <div className="relative w-[100%] mt-[-2rem]">
            <img className="w-full h-auto top-0;" src="/movie-img/joker.png"/>
            <div className="absolute inset-0 mt-40 ml-36">
                <img src="/movie-img/title-joker.png"/>
                <p className="text-white flex justify-between w-[537px] h-[108px] left-[150px] top-[300px] mt-10">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.</p>
                <div className="flex">
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

export default Movies