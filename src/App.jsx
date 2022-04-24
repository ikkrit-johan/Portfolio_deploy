import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import SymfonyProject from './pages/symfonyProject/SymfonyProject';
import ReactProject from './pages/reactProject/ReactProject';
import Ppe from './pages/ppe/Ppe';
import Stage from './pages/stage/Stage';
import Game from './pages/game/Game';
import Divers from './pages/divers/Divers';
import NotFound from './pages/notFound/NotFound';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/symfonyproject" element={<SymfonyProject />} />
           <Route path="/reactproject" element={<ReactProject />} />
           <Route path="/ppe" element={<Ppe />} />
           <Route path="/stage" element={<Stage />} />
           <Route path="/game" element={<Game />} />
           <Route path="/divers" element={<Divers />} />
           <Route path="*" element={<NotFound />} />      
       </Routes>
    </BrowserRouter>
      </>
  )
}

export default App;