import React from 'react'
import Home from "./views/Home";
import LandingPage from "./views/LandingPage";
import UserProfile from "./views/UserProfile";
import Messages from "./views/Messages";
import Explore from "./views/Explore";
import Notifications from "./views/Notifications";
import Bookmarks from "./views/Bookmarks";
import SignupModal from "../src/components/SignupModal"
import LoginModal from "../src/components/LoginModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route path="/userprofile">
              <UserProfile />
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/signup">
              <SignupModal />
            </Route>
            <Route path="/login">
              <LoginModal />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App
