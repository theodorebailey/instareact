import React, {useState} from 'react';

// import react router Dom Components
import { Routes, Route } from 'react-router-dom';

// Import all components
import { Header, Navbar, Footer, Login } from './components/common'

import './App.css';

function App() {

  return (
    <div className="App">     
      <Header />
        {/* <Routes>
          <Route path='/homepage' />
          <Route path='/profile' />
          <Route path='/' />
        </Routes> */}
      <Footer />
    </div>
  );
}

export default App;

// <PageTitle title='home' />
// <PageTitle title='about' />
// <PageTitle title='portfolio' />