import React, { useState } from 'react';
import './App.css';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">

        <div className="NameAndPicture">
        <img src="assets/images/selfie.png" alt="Brian's Picture" />

        <h1>Brian Del Carpio</h1>
        </div>
        
        <div className="InfoField">
          <h3>Bio:</h3>
          <p>All my life, I grew up playing sports at an elite level. During my time in elementary school, pretty much starting in grade one, I began playing 
             tennis about 2 hours a day, 5 days a week. By the time I reached third grade, I was playing either 4 hours of tennis, or a combination of 2 hours
             tennis and 2 hours of soccer. Therfore, I attribute most of my discipline, determination and strong will power to this experience. <br></br><br></br>
             
             After gradutaing from highschool, I had an opportunity to play soccer professionally in France at FC Metz. Unfortunately I had an injury happen 2 months 
             prior to signing. This took me out from practices for 8 motnhs which caused the team to drop my contract. <br></br><br></br>
             
             After France, I came back but was unsure about what I wanted to study, so instead of going to university, I moved out of my parents place and started
             my own journey in the real world. To support myself, I started working 13 hours a day 6 days a week on minimum wage until I found a sales job. At 20 
             years old, I became the youngest manager in the company's history, and I can say that in order to manage people 10+ years older than me, I had to constantly 
             proove to them that I earned my postion at the company through achievments and hard work. <br></br><br></br>

             I didnt have a passion for sales though, I eventually decided working 13 hours a day, no matter how good the pay was, was not enough for me to continue on that path.
             Since I knew, that I would eventually have my own business, I decided to take managment at UBC Okanagan. That year I discovered what coding was about. I discovered
             the freedom you have to create anything you wanted and I quickly developed a love for programming. At the end of the day, I could learn how to run a business as I  
             start one, but it would much harder to learn how to program as I go. This made my decision to switch to a Software Systems major and come back home to study 
             at SFU.<br></br> <br></br>   
             </p>
        </div>

        <div className="block">
          <h3>Education:</h3>
          <ul>
            <a href= "https://www.ubc.ca/" target="_blank"><li>UBC</li></a>
            <div className='logodesc'>
            <a href= "https://www.ubc.ca/" target="_blank"><img src="assets/images/ubclogo.png" alt="UBC Logo" /></a>
            <p><br></br>2021-2022, Managment <br></br><br></br>2022-2023, Computer Science</p>
            </div>
            <a href= "https://www.sfu.ca/" target="_blank"><li>SFU</li></a>
            <div className='logodesc'>
            <a href= "https://www.sfu.ca/" target="_blank"><img src="assets/images/sfuLogo.png" alt="SFU Logo" /></a>
            <p><br></br>2023-present, Software Systems</p>
            </div>
          </ul>
        </div>

        <div className="block">
          <h3>Work Experience:</h3>
          <ul>
            <a href= "https://speeders.ca/" target="_blank"><li>Speeders Indoor Pro-Karts</li></a>
            <div className='logodesc'>
            <a href= "https://speeders.ca/" target="_blank"><img src="assets/images/speederslogo.png" alt="Speeders Logo"  /></a>
              <p><br></br>2018 - 2019 Mechanic<br></br><br></br>
              Febuary - September (2021) Team Manager/Mechanic</p>
            </div>
            <a href= "https://paylidify.com/ca-en/" target="_blank"><li>Paylidify</li></a>
            <div className='logodesc'>
            <a href= "https://paylidify.com/ca-en/" target="_blank"><img src="assets/images/paylidifyLogo.png" alt="paylidify Logo" /></a>
              <p><br></br>2019-2021, Team Manager</p>
            </div>
            <li>DC Goalkeeping Academy</li>
            <div className='logodesc'>
              <img src="assets/images/dcga.png" alt="DC Goalkeeping Academy Logo" />
              <p><br></br>2021-2023, Owner (Not Active anymore)</p>
            </div>
          </ul>
        </div>
        
        <div className="InfoField">
          <h3>Programming Skills:</h3>
          <ul>
            <li>Java
              <div className="secondaryList">
                <ul>
                  <li>Object Oriented Programming</li>
                  <li>Design Patterns</li>
                  <li>Encapsulation</li>
                  <li>Polymorphism</li>
                  <li>Class Design</li>
                  <li>Abstraction</li>
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

        <div className="block">
          <h3>Current Projects:</h3>
          <ul>
            <a href= "https://github.com/BrianDCF99/PersonalWebsite" target="_blank"><li>Personal Website</li></a>
            <p></p>
            <a href= "https://github.com/IanWu1992/cmpt_276_project_group_20" target="_blank"><li>ExtraSize</li></a>
          </ul>
        </div>
        </header>

      <footer class="footer">
      <div className='block'>
          <a href= "https://www.linkedin.com/in/brian-del-carpio-b0291625b/" target="_blank"><img src="assets/images/linkedinLogo.png" alt="Linkedin Logo"></img></a>
          <a href= "https://github.com/BrianDCF99" target="_blank"><img src="assets/images/githubLogo.jpg" alt="GitHub Logo"></img></a>
        </div>
      </footer>

    </div>
  );
}

export default App;