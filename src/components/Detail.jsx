const Detail = () => {
    // const detailTv = [
    //     {
    //         image: Player,

    //     }
    // ]
    
    return ( 
        <>
            <img src="/detail-img/Player.png"/>
            <div className="flex justify-between mx-12 mt-12">
                <div>
                    <div className="flex">
                        <img src="/Cards/Card1.png"/>
                        <div className="ml-8 mt-3">
                            <p className="text-white text-4xl">The Witcher</p>
                            <div className="flex text-white mt-5">
                                <p>2017</p>
                                <p className="ml-3 border px-5 rounded-md">Tv Series</p>
                            </div>
                            <p className="text-white flex text-justify w-80">It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/detail-img/film.png"/>
                </div>
            </div>
        </>
     );
}
 
export default Detail;