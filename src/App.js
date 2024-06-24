import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header';
import AlgorithmPage from './pages/AlgorithmPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/algorithms" element={<AlgorithmPage />} />
      </Routes>
    </Router>
  );
}

export default App;
