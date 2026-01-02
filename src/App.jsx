import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import AuroraBackground from './components/AuroraBackground';
import HomeVideoBackground from './components/HomeVideoBackground';

function App() {
  return (
    <Routes>
      <Route path="/" element={<>
        <div className="fixed inset-0 bg-dark z-[-5]" />
        <HomeVideoBackground />
        <CustomCursor />
        <AuroraBackground />
        <Layout />
      </>}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
