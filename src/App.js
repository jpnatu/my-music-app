import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import MainInterface from './pages/mainInterface';
import Test from './pages/test';
import './index.css';

const App = () => {
  return (
    <div className='h-screen flex flex-col bg-sky-500 text-white'>
      <Header/>
      <MainInterface />
      {/* <Test /> */}
      <Footer />
    </div>
  );
};

export default App;
