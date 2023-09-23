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
import DataProjects from './Pages/DataProjects';

import WebDevHome from './Pages/WebDevHome';
import WebDevWrapper from './Pages/WebDevWrapper';
import WebDevAllProjects from './WebDevComponents/WebDevAllProjects';

function App() {
  return (
    <div className={`${appStyles.app}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/allresearchWork" element={<AllResearchWork />} />
          <Route path="/dataprojects" element={<DataProjects />} />

          <Route path="/webdev" element={<WebDevWrapper />}>
            <Route path="/webdev" element={<WebDevHome />} />
            <Route path="projects" element={<WebDevAllProjects />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
