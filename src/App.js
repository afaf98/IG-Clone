import "./App.css";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/Homepage";
import NavBar from "./Components/Navbar/NavBar";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./Components/Auth/SignupPage";
import HomeUser from "./Components/HomeUser/HomeUser";
import { TokenProvider } from "./context/useToken";
import UploadPicture from "./Components/UploadPicture/UploadPicture";

function App() {
  return (
    <div className="App">
      <TokenProvider>
        <NavBar />
        <Footer />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={SignupPage} />
          <Route path="/profile" component={HomeUser} />
          <Route path="/upload" component={UploadPicture} />
        </Switch>
      </TokenProvider>
    </div>
  );
}

export default App;
