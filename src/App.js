import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './menu/Navbar/Navbar';
import Home from './menu/Home/Home';
import About from './menu/About/About';
import Portfolio from './menu/Portfolio/Portfolio';
import Contact from './menu/Contact/Contact';
import Footer from './menu/Footer/Footer';
import Portfolio_singl from './menu/Portfolio/Portfolio_singl';
import Vacancy from './menu/Contact/Vacancy';
import { useState, useEffect } from 'react';
import PreLoad from './menu/pre-loder/preLoad';

function App() {

  const [lod, setLod] = useState(false)

  useEffect(() => {
    setLod(true)
    setTimeout(() => {
      setLod(false)
    }, 1500)
  }, [])

  return (
    <>
      {
        lod ?
          <PreLoad />
          :
          <Router>
            <Navbar />

            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/portfolio' exact component={Portfolio} />
              <Route path='/contact' exact component={Contact} />
              <Route path='/portfolio-single/:id' exact component={Portfolio_singl} />
              <Route path='/vacancy' exact component={Vacancy} />
            </Switch>
            <Footer />
          </Router>
      }
    </>
  );
}

export default App;
