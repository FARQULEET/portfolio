// src/App.js
import React from 'react';
import './index.css'; // Ensure you import your main CSS file
import Top from './Collection/top';
import About from './Collection/about';
import AboutMe from './Collection/aboutme';
import Skill from './Collection/skill';
function App() {
  return ( <>
      <main className="bg-black pt-16"> {/* offset for fixed navbar */}
        <Top />
        <About />  
        <AboutMe />
        <Skill/>
      </main>
      </>
  );
}

export default App;