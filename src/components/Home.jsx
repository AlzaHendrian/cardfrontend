import Cards from "./Cards"
import Jumbotron from "./jumbotron"


const Home = () => {
    const tv = [
        {
        id: 1,
        image: 'Card1',
        name: 'The Witcher',
        year: '2019'
      },
      {
        id: 2,
        image: 'Card2',
        name: 'Persona 3 The Movie',
        year: '2016'
      },
      {
        id: 3,
        image: 'Card3',
        name: 'Game Of Thrones',
        year: '2011'
      },
      {
        id: 4,
        image: 'Card4',
        name: 'Money Heist',
        year: '2017'
      },
      {
        id: 5,
        image: 'Card5',
        name: 'Touch',
        year: '2020'
      },
      {
        id: 6,
        image: 'Card6',
        name: 'Arrow',
        year: '2012'
      },
    ]
    const movie = [
          {
            id: 1,
            image: 'movie1',
            name: 'The GodFather',
            year: '1972'
          },
          {
            id: 2,
            image: 'movie2',
            name: 'The Dark Knight',
            year: '2008'
          },
          {
            id: 3,
            image: 'movie3',
            name: 'Avengers : Endgame',
            year: '2019'
          },
          {
            id: 4,
            image: 'movie4',
            name: 'Joker',
            year: '2019'
          },
          {
            id: 5,
            image: 'movie5',
            name: 'Gisaengchung',
            year: '2019'
          },
          {
            id: 6,
            image: 'movie6',
            name: 'Chernobly',
            year: '2019'
          }
    ]
    
    return (
    <>
    <Jumbotron />
    <Cards movie={movie} tv={tv} />
    </>
    )
}

export default Home