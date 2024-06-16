import React, { useState } from 'react';
import Albums from "../assets/data/dummyAlbums.json";

const MainInterface = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const toggleAlbumDetails = (Albums) => {
    if (selectedAlbum && selectedAlbum.id === Albums.id) {
      setSelectedAlbum(null);
    } else {
      setSelectedAlbum(Albums);
    }
  };

  return (
    <div className="flex h-full">
      <div className="pt-20 pb-24 p-4 overflow-y-auto">
          <h2 className="title">Library</h2>
          {/* Album list */}
          <div className="shelf">
            {Albums.map((album, index)=> (
              <div className="album" key={index} onClick={() => toggleAlbumDetails(album)}>
                <img className="album-image"
                  src={album.cover}alt={`${album.title} cover`}/>
                <p className="whitespace-nowrap overflow-hidden text-white">{album.title}</p>
                <p className="text-sm text-gray-300">{album.date}</p>
              </div>
            ))}
          </div>
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
