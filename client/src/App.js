/*
Client APP Main | HOLDING: Reactified Web App
Douglas MacKrell, Briahana Maugé, Joseph P. Pasaoa, Kathy Puma
*/


/* IMPORTS */
import React from 'react';

import './App.css';
import AboutPage from './pages/AboutPage';

const logo = require('./assets/images/logo/logo-191113-jetVmmist.svg');


/* MAIN */
const App = () => {
  return (
    <div className="App">
      <div id="base-grid">

        <div id="headerLogo">
            <img id="logo" src={logo} alt="Holding Logo" />
        </div>
        <div id="headerNav">
            <ul id="toc">
                <li><a href="./holds.html" id="tocHolds" class="toc">Home</a></li>
                <li><a href="./profile.html" id="tocProfile" class="toc">Profile</a></li>
                <li><a href="./users.html" id="tocUsers" class="toc">Search</a></li>
                <li><a href="./albums.html" id="tocAlbums" class="toc">MyAlbums</a></li>
                <li><a href="./about.html" id="tocAboutH" class="toc">About</a></li>
            </ul>
        </div>

        <div id="leftBase">
            <div id="crownShim"></div>
            <div id="crownHolder">
                <form id="holdDD">
                    <select id="holdsDropper"></select>
                    <input type="hidden" id="currentHold" />
                    </form>
                </div>
                <div id="bodyLeftSpot"></div>
                <div id="bodyAboutHold">
                    <div id="aboutHold"></div>
                </div>
        </div>

        <div id="crownMarquee">
            <div id="marquee"></div>
        </div>

        <AboutPage />

      </div>
    </div>
  );
}


export default App;
