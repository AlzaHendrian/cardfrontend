

const Cards = (props) => {
    
    const obj1 = Object.values(props.value.TV)
    const obj2 = Object.values(props.value.Movies)
    console.log(obj1)
    

    const ListMovies = () => {
        return obj1.map((movie) => {
            return (
                <div className="card">
                    <img src={require(`../img/Cards/${movie.image}.png` )} />
                    <p className="card-title text-white">{movie.name}</p>
                    <p className="card-text text-white">{movie.year}</p>
                </div>
            )
        })
    }
    
    const ListTV = () => {
        return obj2.map((tv) => {
            return (
                <div className="card">
                    <img src={require(`../img/Cards/${tv.image}.png` )} />
                    <p className="card-title text-white">{tv.name}</p>
                    <p className="card-text text-white">{tv.year}</p>
                </div>
            )
        })
    }

    return (
        <div>
            <div>
                <p className=" text-white text-3xl mb-8">TV Series</p>
            </div>
            <div className="flex gap-6">
                <ListMovies/>
            </div>
            <div>
                <p className=" text-white text-3xl mb-8">Movies</p>
            </div>
            <div className="flex gap-6">
                <ListTV/>
            </div>
        </div>
    )
}

export default Cards