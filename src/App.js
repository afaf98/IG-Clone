import "./App.css";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage";
import NavBar from "./Components/Navbar/NavBar";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./Components/Auth/SignupPage";
import Feed from "./Components/Feed/Feed";
import { TokenProvider } from "./context/useToken";
import { NewPictureProvider } from "./context/newPictureContext";

import UploadPicture from "./Components/UploadPicture/UploadPicture";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import ChoosePage from "./Components/ChoosePage/ChoosePage";
import TakePhoto from "./Components/TakePhoto/TakePhoto";
import Users from "./Components/Users/Users";

function App() {
  return (
    <div className="App">
      <TokenProvider>
        <NewPictureProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/login">
              <SignupPage />
            </Route>
            <PrivateRoute path="/home">
              <Feed />
            </PrivateRoute>
            <PrivateRoute path="/upload">
              <UploadPicture />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <ProfilePage />
            </PrivateRoute>
            <PrivateRoute path="/choose">
              <ChoosePage />
            </PrivateRoute>
            <PrivateRoute path="/takephoto">
              <TakePhoto />
            </PrivateRoute>
          </Switch>
          <Footer />
        </NewPictureProvider>
      </TokenProvider>
    </div>
  );
}

export default App;
