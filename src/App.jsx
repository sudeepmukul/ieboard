import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CustomCursor from './components/CustomCursor';
import AuroraBackground from './components/AuroraBackground';
import HomeVideoBackground from './components/HomeVideoBackground';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Events = lazy(() => import('./pages/Events'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blogs = lazy(() => import('./pages/Blogs'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center text-white">
    <div className="animate-pulse text-xl font-bold">Loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
}

export default App;
