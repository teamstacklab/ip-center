import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Home from "./pages/Home";
import Lojas from './pages/Lojas';
import Eventos from './pages/Eventos';

// Components
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

// React Navigator
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from 'react-router-dom';

// Config do Router
function AppRoutes() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/lojas' element={<Lojas />} />
      </Routes>
      <Routes>
        <Route path='/eventos' element={<Eventos />} />
      </Routes>
    </React.Fragment>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
