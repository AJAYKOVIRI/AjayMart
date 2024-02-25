import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './stores/pages/LandingPage';
import BallsPage from './stores/pages/BallsPage';
import BatsPage from './stores/pages/BatsPage';
import HelmetsPage from './stores/pages/HelmetsPage';
import GlovesPage from './stores/pages/GlovesPage';
import PadsPage from './stores/pages/PadsPage';

import BatsSingle from './singles/BatsSingle';
import BallsSingle from './singles/BallsSingle';
import HelmetsSingle from './singles/HelmetsSingle';
import GlovesSingle from './singles/GlovesSingle';
import PadsSingle from './singles/PadsSingle';
import UserCart from './stores/UserCart';

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bats" element={<BatsPage />} />
        <Route path="/helmets" element={<HelmetsPage />} />
        <Route path="/balls" element={<BallsPage />} />
        <Route path="/gloves" element={<GlovesPage />} />
        <Route path="/pads" element={<PadsPage />} />
        <Route path="/bats/:id" element={<BatsSingle />} />
        <Route path="/balls/:id" element={<BallsSingle />} />
        <Route path="/helmets/:id" element={<HelmetsSingle />} />
        <Route path="/gloves/:id" element={<GlovesSingle />} />
        <Route path="/pads/:id" element={<PadsSingle />} />
        <Route path="/cart" element={<UserCart />} />
      </Routes>

  );
};

export default App;
