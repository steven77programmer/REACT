import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
  const [darkmode,setDarkMode]=React.useState(false);
  function toggleDarkMode(){ //toggle(){
    setDarkMode(prev=>!prev);
  } 
    return (
        <div className="container">
            <Navbar 
            darkMode={darkmode}
           // toggleDarkMode={toggle}
           toggleDarkMode={toggleDarkMode}
            />
            <Main 
              darkMode={darkmode}
            />
        </div>
    )
}