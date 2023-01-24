import React, {useState} from 'react';
// import react router Dom Components
import { Routes, Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";


// Import all components
import { Header, Navbar, Footer, Login, Logged } from './components/common'

// const [user, setUser] = useState('username');
// Header handleClick={user => setUser(user)}
// import { UserContext } from './UserContext';

import './App.css';

function App() {


  return (
    // had big plans for the project but decided to hand in as is
    // created a side-navbar intending to create a home page with card content like instagram but need to crack on with the course
    <div className="App">
       <Header />
       <Footer />
    </div>
  );
}

export default App;

// <PageTitle title='home' />
// <PageTitle title='about' />
// <PageTitle title='portfolio' />