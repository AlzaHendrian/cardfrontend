import { Link } from "react-router-dom"


const Cards = (props) => {
    
    const obj1 = Object.values(props.tv)
    const obj2 = Object.values(props.movie)
    console.log(obj1)

    const ListMovies = () => {
        return obj1.map((movie) => {
            return (
                <Link to={`/detail/${movie.id}`}>
                    <div className="card">
                        <img src={`../Cards/${movie.image}.png`} />
                        <p className="card-title text-white">{movie.name}</p>
                        <p className="card-text text-white">{movie.year}</p>
                    </div>
                </Link>
            )
        })
    }
    
    const ListTV = () => {
        return obj2.map((tv) => {
            return (
                <Link to={`/detail/${tv.id}`}>
                    <div className="card">
                        <img src={`../Cards/${tv.image}.png`} />
                        <p className="card-title text-white">{tv.name}</p>
                        <p className="card-text text-white">{tv.year}</p>
                    </div>
                </Link>
            )
        })
    }

    return (
        <div>
            <div>
                <p className=" text-white text-3xl mb-8">TV Series</p>
            </div>
            <div className="flex gap-3 justify-center">
                <ListMovies/>
            </div>
            <div>
                <p className=" text-white text-3xl mb-8">Movies</p>
            </div>
            <div className="flex gap-3 justify-center">
                <ListTV/>
            </div>
        </div>
    )
}

export default Cards