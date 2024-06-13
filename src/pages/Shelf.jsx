import React from "react";

const Shelf = ({ title, albums }) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-sky-200">
      <h2 className="text-2xl mb-4 text-black">{title}</h2>
      <div className="shelf">
        {albums.map((album, index) => (
          <div className="album rounded-lg shadow-lg" key={index}>
            <img className="w-full h-full object-cover pointer-events-none rounded-t-lg"
             src={album.cover}alt={`${album.title} cover`}/>
            <p className="whitespace-nowrap overflow-hidden text-white">{album.title}</p>
            <p className="text-sm text-gray-300">{album.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shelf;
