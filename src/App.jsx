import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Stage from './components/stage/Stage';
import Game from './components/game/Game';
import Resources from './components/resources/Resources';
import SymfonyProject from './components/symfonyProject/SymfonyProject';
import ReactProject from './components/reactProject/ReactProject';
import Ppe from './components/ppe/Ppe';
import Divers from './components/divers/Divers';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';




const App = () => {
    return (
      <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Stage />
          <Game />
          <SymfonyProject />
          <ReactProject />
          <Ppe />
          <Divers />
          <Resources />
          <Contact />
          <Footer /> 
    </>
  )
}

export default App;