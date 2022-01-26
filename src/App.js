// IMPORT COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
// IMPORT PAGES
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
// IMPORT STYLESHEET
import './App.css';

function App() {
  // Backend HEROKU URL
  const URL = "https://jbs-portfolio.herokuapp.com";
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
