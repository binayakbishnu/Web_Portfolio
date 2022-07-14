import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import appStyles from './App.module.css'

// import Nav from './Nav';
// import Footer from './Footer';

import HomePage from './Pages/HomePage'
import AllProjects from './Pages/AllProjects';
import AllResearchWork from './Pages/AllResearchWork';

function App() {
  return (
    <div className={`${appStyles.app}`}>

      {/* <Nav /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/allresearchWork" element={<AllResearchWork />} />

        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
