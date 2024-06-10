import React from 'react';
import Shelf from './Shelf';
import './index.css';
import Footer from './footer';

const App = () => {
  const dummyAlbums = [
    { title: 'The Dark Side of the Moon', cover: 'https://via.placeholder.com/300', date: '1973' , tracks: [1,2,3,4,5,6,7,8,9,10]},
    { title: 'Nursery Cryme', cover: 'https://via.placeholder.com/150' , date: '1971' },
    { title: 'Close to the Edge', cover: 'https://via.placeholder.com/150' , date: '1972' },
    { title: 'In the Court of the Crimson King', cover: 'https://via.placeholder.com/150', date: '1969' },
    { title: 'Selling England by the Pound', cover: 'https://via.placeholder.com/150' , date: '1973' },
    { title: 'Thick as a Brick', cover: 'https://via.placeholder.com/150' , date: '1972'}
  ];

  return (
    <div className='"h-screen flex flex-col bg-gray-900 text-white'>
      <header className='"bg-gray-800 p-4 flex justify-between items-center'>
        <h1 className="text-2xl"> My Music App </h1>
        <nav>
          <a hlef="#library" className='px-4'>Library</a>
          <a hlef="#My Shelfs" className='px-4'>My Shelfs</a>
          <a hlef="#settings" className='px-4'>Settings</a>
        </nav>
      </header>
      <div className="App p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">My Music Library</h1>
        <Shelf title="Progressive Rock" albums={dummyAlbums} />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
