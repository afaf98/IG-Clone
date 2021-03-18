import "./App.css";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/Homepage";
import NavBar from "./Components/Navbar/NavBar";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./Components/Auth/SignupPage";
import HomeUser from "./Components/HomeUser/HomeUser";
import { TokenProvider } from "./context/useToken";
import UploadPicture from "./Components/UploadPicture/UploadPicture";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <TokenProvider>
        <NavBar />
        <Footer />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <SignupPage />
          </Route>
          <PrivateRoute path="/profile">
            <HomeUser />
          </PrivateRoute>
          <PrivateRoute path="/upload">
            <UploadPicture />
          </PrivateRoute>
        </Switch>
      </TokenProvider>
    </div>
  );
}

export default App;
