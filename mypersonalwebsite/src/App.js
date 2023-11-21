import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling


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
        
        <div className="NameAndPicture">
        <img src="assets/images/selfie.png" alt="Brian's Picture" />

        <h1>Brian Del Carpio</h1>
        </div>


        <div className="InfoField">
          <h3>Bio:</h3>
          <p>All my life, I grew up playing sports at an elite level. During my time at elementary school, pretty much starting in grade one, I began playing 
             tennis about 2 hours a day, 5 days a week. By the time I reached third grade, I was playing either 4 hours of tennis, or a combination of 2 hours
             tennis and 2 hours of soccer. I attribute most of my discipline, determination and strong will power to this experience. 
             
             After gradutaing from highschool, I had an opportunity to play soccer professionally in France at FC Metz. Unfortunately I had an injury happen 2 months 
             prior to signing. This took me out from practices for 8 motnhs which caused the team to drop my contract. 
             
             After France, I came back but was unsure about what I wanted to study. I moved out of my parents place and started my own journey in the real world. To support 
             myself, I started working 13 hours a day 6 days a week on minimum wage until I found a sales job, eventually at 20 years old, I became the youngest manager
             in the company's history, and I can say that in order to manage people 10+ years older than me, I had to constantly proove to them that I earned my 
             postion at the company through achievments and hard work. 

             I didnt have a passion for sales though, I eventually decided working 13 hours a day no matter how good the pay was, was not enough for me to continue on that path.
             Since I knew, that I will eventually have my own business, I decided to take managment at UBC Okanagan. That year I discovered what coding was about. I discovered
             the freedom you have to create anything you wanted and I quickly developed a love for programming. I could learn how to run a business as I made onw, but it would
             much harder to learn how to program as I go. This made my decision to switch to a Software Systems major and come back home to study at SFU.           
             </p>
        </div>

        <div className="InfoField">
          <h3>Education:</h3>
          <h4>UBC</h4>
          <p>2021 - 2022 Managment</p>
          <p>2022 - 2023 Computer Science</p>

          <h4>SFU</h4>
          <p>2023 - Present Software Systems</p>
        </div>

        <div className="InfoField">
          <h3>Work Experience:</h3>

          <h4>Speeders Indoor Pro-Karts</h4>
          <img src="assets/images/speedersLogo.png" alt="Speeders Logo" />
          <p>2018 - 2019 Mechanic</p>
          <p>Febuary - September (2021) Team Manager/Mechanic</p>

          <h4>Paylidify</h4>
          <img src="assets/images/paylidifyLogo.png" alt="Paylidify Logo" />
          <p>2019-2021 Team Manager</p>
        </div>
        
        <div className="InfoField">
          <h3>Programming Skills</h3>
          <ul>
            <li>Java
              <div className="secondaryList">
                <ul>
                  <li>Object Oriented Programming</li>
                  <li>Polymorphism</li>
                  <li>Class Design</li>
                  <li>Spring</li>
                  <li>Swing</li>
                  <li>JUnit</li>
                  <li>FX</li>
                </ul>
              </div>
            </li>
            <li>JavaScript
            <div className="secondaryList">
                <ul>
                  <li>React</li>
                </ul>
            </div>    
            </li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className='InfoField'>
          <h3>My links</h3>
          <h4><u>Linkedin</u></h4>
          <h4><u>Github</u></h4>
        </div>
      </header>
    </div>
  );
}

export default App;