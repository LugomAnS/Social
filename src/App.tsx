import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
