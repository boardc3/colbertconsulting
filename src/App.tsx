import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Packages from './components/Packages';
import ReferralProgram from './components/ReferralProgram';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Bio />
      <Packages />
      <ReferralProgram />
      <Footer />
    </div>
  );
}

export default App;
