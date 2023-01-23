import React, {useState} from 'react';

// import react router Dom Components
import { Routes, Route, useActionData } from 'react-router-dom';

// Import all components
import { Header, Navbar, Footer, PageTitle, PageContent } from './components/common'

import './App.css';

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {

    setCurrentForm(formName);

  }

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/contact' element= { <PageTitle title='contact'>Contact</PageTitle> } />
          <Route path='/profile' element= { <PageTitle title='profile'>Profile</PageTitle> } />
          <Route path='/' element= { <PageContent></PageContent> }/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

// <PageTitle title='home' />
// <PageTitle title='about' />
// <PageTitle title='portfolio' />