import React from 'react';
import Footer from './footer';
import Header from './header';
import MainInterface from './main/mainInterface';
import Test from './main/test';
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
