import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

const name = {
  name: 'Brian Del Carpio',
  imagePath: '../images/Selfie.jpg',
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-right-menu">
          <button onClick={toggleMenu}>More</button>
          {isMenuOpen && (
            <div className="dropdown-menu">
              {/* Dropdown menu content goes here */}
              <ul>
                <li>About</li>
                <li>Current Projects</li>
                <li>Work Experience</li>
                <li>Education</li>
                <li>Other Links</li>
              </ul>
            </div>
          )}
        </div>


        <img src={name.imagePath} alt="Brian's Picure" />
        <h1>{name.name}</h1>
        
      </header>
    </div>
  );
}

export default App;