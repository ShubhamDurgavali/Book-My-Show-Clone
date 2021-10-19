// import { Route } from 'react-router-dom';
import './App.css';

// axios
import axios from "axios"

// HOC
import DefaultHOC from './HOC/DefaultHOC';
import MovieHOC from './HOC/MovieHOC';

// Pages
import Homepage from './Pages/Homepage';
import Moviepage from "./Pages/Moviepage";
import Plays from './Pages/Plays';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Homepage} />
      <MovieHOC path="/movie/:id" exact component={Moviepage} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
