import React from "react";
import Navigation from "../navigation/index.js";
import WhatsHappening from "../whats-happening/index.js";
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import Home from "../home/index.js";
import Bookmarks from "../bookmarks/index.js";
import Profile from "../profile/index.js";
import './tuiter.css'
import EditProfile from "../profile/edit-profile.js";
import Explore from "../explore/index.js";
import Notifications from "../notifications/index.js";
import Messages from "../messages/index.js";
import Lists from "../lists/index.js";
import More from "../more/index.js";
import {Login} from "../profile/login.js";

function Tuiter () {
  return(
    <HashRouter>
      <div className="container">
        <div className="ttr-tuiter">
          <div className="ttr-left-column">
            <Navigation/>
          </div>
          <div className="ttr-center-column">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/tuiter" element={<Home/>}/>
              <Route path="/tuiter/:uid" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/home/:uid" element={<Home/>}/>
              <Route path="/explore" element={<Explore/>}/>
              <Route path="/notifications" element={<Notifications/>}/>
              <Route path="/messages" element={<Messages/>}/>
              <Route path="/bookmarks" element={<Bookmarks/>}/>
              <Route path="/lists" element={<Lists/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/profile/edit" element={<EditProfile/>}/>
              <Route path="/more" element={<More/>}/>
            </Routes>
          </div>
          <div className="ttr-right-column">
            <WhatsHappening/>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
export default Tuiter;