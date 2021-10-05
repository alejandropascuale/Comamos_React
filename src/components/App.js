import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import '../assets/css/style.css';
import Header from './Header';
import Main from './Home/Main';
import Footer from './Footer';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
