import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Header from "./components/Header.js";
import banner from "./components/img/banner.jpeg";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import Newsletter from "./components/Newsletter.js";
import Support from "./components/Support.js";

function App() {
  return (
    <div>
    <Router>
        <Header />
        <Switch>
          <Route>
            <Route path="/" exact component={() => <img className="mt-2" src={banner} alt="Curious Grids Banner" />} />
            <Route path='/' exact component={Content} />
            <Route path='/support' exact component={Support} />
            <Route path='/newsletter' exact component={Newsletter} />
          </Route>
        </Switch>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
