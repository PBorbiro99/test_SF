import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Start from './components/pages/Start';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sectiuni from './components/pages/Sectiuni';
import Echipa from './components/pages/Echipa';
import Formular from './components/pages/Formular';
import BootstrapCarousel from "./BootstrapCarousel"

function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route path='/' exact component={Start} />
          <Route path='/sectiuni' component={Sectiuni} />
          <Route path='/echipa' component={Echipa} />
          <Route path='/formular' component={Formular} />
          <Route path="/home" component={Home}/>
          
        </Switch>
        
        
      </Router>
      
    </>
  );
}

export default App;
