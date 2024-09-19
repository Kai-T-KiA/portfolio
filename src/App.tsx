import './App.css';
import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Career from './components/career/career';
import Skill from './components/skill/skill';
import Projects from './components/projects/projects';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Career />
      <Skill />
      <Projects />
      {/* 他のコンポーネントやコンテンツ */}
    </div>
  );
};

export default App;
