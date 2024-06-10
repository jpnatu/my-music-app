import React from 'react';

const Shelf = ({ title, albums }) => {
  return (
    <div className="p-4 bg-brown-300 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">{title}</h2>
      <div className="shelf">
        {albums.map((album, index) => (
          <div className="album" key={index}>
            <img className="w-full h-40 object-cover rounded-md" src={album.cover} alt={`${album.title} cover`} />
            <p className="album-info   mt-2 text-center text-gray-800">{album.title}</p>
            <p className="text-center text-gray-500 text-sm">{album.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shelf;
