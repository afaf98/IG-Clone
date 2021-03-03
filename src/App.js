import "./App.css";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/Homepage";
import NavBar from "./Components/Navbar/NavBar";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./Components/Auth/SignupPage";
import HomeUser from "./Components/HomeUser/HomeUser";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={SignupPage} />
        <Route path="/home" component={HomeUser} />
      </Switch>
    </div>
  );
}

export default App;
