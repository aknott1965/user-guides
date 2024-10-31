import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FileBrowser from './components/FileBrowser';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-guides" element={<FileBrowser />} />
      </Routes>
    </Router>
  );
}
