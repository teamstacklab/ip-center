import Home from './pages/Home';
import './App.css';
import NavigationBar from './components/NavigationBar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Home />
    </React.Fragment>
  );
}

export default App;
