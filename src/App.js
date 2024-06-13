import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import MainInterface from './pages/mainInterface';
import Test from './pages/test';
import LibTest from './pages/libTest';
import './assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <div className='h-screen flex flex-col bg-cyan-50 text-black'>
        <Header />

        <Routes>
          <Route path='/' element={<MainInterface />} />
          <Route path='/test' element={<Test />} />
          <Route path='/libtest' element={<LibTest />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
