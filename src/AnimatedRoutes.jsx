import {
    Routes,
    Route,
    useLocation
  } from 'react-router-dom';

import { Advantages } from './pages/Advantages';
import { Definition } from './pages/Definition';
import { Disadvantages } from './pages/Disadvantages';
import { Home } from './pages/Home';
import { Prototyping } from './pages/Prototyping';
import { ShowMeTheCode } from './pages/ShowMeTheCode';
import { WhatINeed } from './pages/WhatINeed';
import { End } from './pages/End';

import { AnimatePresence } from 'framer-motion';

export function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
    <Routes localtion={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="definition" element={<Definition />} />
          <Route path="advantages" element={<Advantages />} />
          <Route path="disadvantages" element={<Disadvantages />} />
          <Route path="what-i-need" element={<WhatINeed />} />
          <Route path="prototyping" element={<Prototyping />} />
          <Route path="show-me-the-code" element={<ShowMeTheCode />} />
          <Route path="end" element={<End />} />
        </Routes>
        </AnimatePresence>
  )
};