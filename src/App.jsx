import Navbar from "./Navbar.jsx";
import "./style.scss";
import "./responsive.scss";
import Home from "./Home.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import Contact from "./Contact.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./Work.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/how-it-works">
          <Navbar bc="white" />
          <Work />
        </Route>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
