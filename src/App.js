import React, {useState} from 'react';
// import react router Dom Components
import { Routes, Route } from 'react-router-dom';

// Import all components
import { Header, Navbar, Footer, Login, Logged } from './components/common'


// import { UserContext } from './UserContext';

import './App.css';

function App() {

  const [user, setUser] = useState('userName')

  return (
    <div className="App">
U      <Header />
       <Footer />
    </div>
  );
}

export default App;

// <PageTitle title='home' />
// <PageTitle title='about' />
// <PageTitle title='portfolio' />