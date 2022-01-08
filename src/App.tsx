import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Home from './pages/Home';
import { About } from './pages/About';
import View from './pages/View';
import { Portfolio } from './pages/Portfolio';
import CreatePost from './pages/CreatePost';
import styled from 'styled-components';
// import Test from './pages/test';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/view-post" element={<View />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
