import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import MovieDetails from './Components/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router> 
      <Header />
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie-details/:slug" >
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
