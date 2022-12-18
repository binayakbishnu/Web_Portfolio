import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import appStyles from './App.module.css'

import HomePage from './Pages/HomePage'
import AllProjects from './Pages/AllProjects';
import AllResearchWork from './Pages/AllResearchWork';
import WebDev from './Pages/WebDev';

function App() {
  return (
    <div className={`${appStyles.app}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/webdev" element={<WebDev />} />

          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/allresearchWork" element={<AllResearchWork />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
