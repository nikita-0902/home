import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom"



import './App.css';


import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import ContactUs from './components/ContactUs/ContactUs';
import Skills from './components/Skills/Skills';
import Content from './components/Content/Content';

function App(props) {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
            <span />
          </div>
        </nav>
        <Header active={menuActive} setActive={setMenuActive} />

        < main >
          <Route path='/home' render={Content} />
          <Route path='/aboutMe' render={AboutMe} />
          <Route path='/portfolio' render={Portfolio} />
          <Route path='/skills' render={Skills} />
          <Route path='/contactUs' render={ContactUs} />
        </main>

      </div>
    </BrowserRouter>
  );
}
export default App; 