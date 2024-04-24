
import Landing from "./components/landing";
import AboutUs from "./components/aboutus";
import Contact from "./components/contact";
import Nav from "./components/nav";
import Footer from "./components/footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
<div>

    <Router>
  <Nav />
<Switch>
  <Route path="/" exact component={Landing}></Route>
    <Route path="/aboutus" component={AboutUs}></Route>
    <Route path="/contact" component={Contact}></Route>
</Switch>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
