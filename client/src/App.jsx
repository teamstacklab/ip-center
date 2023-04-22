import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Navigator
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes'; // <-- Configura as rotas Aqui agora


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
