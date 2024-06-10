import React, { useState } from 'react';
import Shelf from './Shelf';

const albums = [
  { id: 1, title: 'Album Title 1', artist: 'Artist 1', cover: 'https://via.placeholder.com/150', tracks: ['Track 1', 'Track 2', 'Track 3'] },
  { id: 2, title: 'Album Title 2', artist: 'Artist 2', cover: 'https://via.placeholder.com/150', tracks: ['Track 1', 'Track 2'] },
  { id: 3, title: 'Album Title 3', artist: 'Artist 3', cover: 'https://via.placeholder.com/150', tracks: ['Track 1', 'Track 2', 'Track 3', 'Track 4'] },
  // さらにアルバムを追加
];

const MainInterface = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const toggleAlbumDetails = (album) => {
    if (selectedAlbum && selectedAlbum.id === album.id) {
      setSelectedAlbum(null);
    } else {
      setSelectedAlbum(album);
    }
  };

  return (
    <div className="flex h-full">
      <div className="flex-grow p-8 bg-gray-100 overflow-y-auto">
        <section id="library">
          <h2 className="text-xl mb-4">Library</h2>
          {/* Album list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 
                          md:grid-cols-4 lg:grid-cols-6 gap-5">
            {albums.map(album => (
              <div key={album.id} className="bg-gray-800 p-2 rounded" onClick={() => toggleAlbumDetails(album)}>
                <img src={album.cover} alt={album.title} className="w-full h-auto rounded-md" />
                <h3 className="mt-2 text-lg">{album.title}</h3>
                <p>{album.artist}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedAlbum && (
        <div className="w-1/3 p-4 bg-gray-800">
          <h2 className="text-xl mb-4">{selectedAlbum.title}</h2>
          <img src={selectedAlbum.cover} alt={selectedAlbum.title} className="w-full h-auto rounded mb-4" />
          <p>{selectedAlbum.artist}</p>
          <ul className="mt-4">
            {selectedAlbum.tracks.map((track, index) => (
              <li key={index} className="bg-gray-700 p-2 rounded mb-2">
                {track}
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={() => setSelectedAlbum(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default MainInterface;
