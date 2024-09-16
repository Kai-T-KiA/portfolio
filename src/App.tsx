import './App.css';
import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      {/* 他のコンポーネントやコンテンツ */}
    </div>
  );
};

export default App;
