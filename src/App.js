import "./App.css";
import logo from "./logo.png";
import Navbaritems from "./Components/Navbar-items";
import HomePage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <a>
          <img src={logo} alt="logo" />
        </a>
        <Navbaritems item="Ideas" path="/ideas" />
        <Navbaritems item="About Us" path="/aboutus" />
        <Navbaritems item="Login" path="/login" />
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
