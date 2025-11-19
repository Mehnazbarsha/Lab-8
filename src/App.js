import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz.js';
import HomePage from './components/HomePage.js';
import ResultsPage from './components/ResultsPage.js';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [resultsData, setResultsData] = useState(null);

  const handleNavigation = (page, data) => {
    setCurrentPage(page);
    if (data) {
      setResultsData(data);
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'quiz':
        return <Quiz onNavigate={handleNavigation} />;
      case 'results':
        return <ResultsPage data={resultsData} onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;