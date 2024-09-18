import './App.css';
import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Career from './components/career/career';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Career />
      {/* 他のコンポーネントやコンテンツ */}
    </div>
  );
};

export default App;
