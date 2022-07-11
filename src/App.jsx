import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import appStyles from './App.module.css'

import Nav from './Nav';
import Footer from './Footer';

import HomePage from './Pages/HomePage'
import AllProjects from './Pages/AllProjects';

function App() {
  return (
    <div className={`${appStyles.app}`}>

      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/allprojects" element={<AllProjects />} />

        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
