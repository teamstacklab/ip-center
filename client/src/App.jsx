import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Navigator
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes'; // <-- Configura as rotas Aqui agora


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
