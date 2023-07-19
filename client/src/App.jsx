import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/inter'

// React Navigator
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes'; // <-- Configura as rotas Aqui agora

const Global = createGlobalStyle`
  *, p {
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <BrowserRouter>
      <Global />
      <NavigationBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
