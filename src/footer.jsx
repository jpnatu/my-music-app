import React from "react";

const Footer = () => {
  return (
      <footer className="absolute bottom-0 w-full p-4 bg-black flex justify-between items-center">
        <div>
          <h3>Now Playing:</h3>
          <p>Song Title - Artist Name</p>
        </div>
        <div>
          <button className="bg-green-800 p-2 rounded">Play</button>
          <button className="bg-green-800 p-2 rounded ml-2">Pause</button>
        </div>
      </footer>
  );
}

export default Footer;
