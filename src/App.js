import Cards from "./components/Cards";
import Header from "./components/Header";
import Jumbotron from "./components/jumbotron";
import './index.css'
const movie = {
  TV: {
    tv1: {
      image: 'Card1',
      name: 'The Witcher',
      year: '2019'
    },
    tv2: {
      image: 'Card1',
      name: 'Persona 3 The Movie',
      year: '2016'
    },

  },
  Movies: {
    Movie1: {
      image: 'Card1',
      name: 'title1',
      year: '2019'
    }
  }
}


function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Cards value={movie} />
    </div>
  );
}

export default App;
