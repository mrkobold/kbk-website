import { Switch, Route } from "react-router-dom";

import "./App.css"

import LandingPage from './pages/LandingPage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Header from './components/Header'
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="page">
      <Header/>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/portfolio" component={Portfolio} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;