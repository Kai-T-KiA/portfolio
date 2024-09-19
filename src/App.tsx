import './App.css';
import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Career from './components/career/career';
import Skill from './components/skill/skill';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Career />
      <Skill />
      <Projects />
      <Footer />
      {/* 他のコンポーネントやコンテンツ */}
    </div>
  );
};

export default App;
