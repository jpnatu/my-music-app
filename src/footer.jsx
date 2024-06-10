import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 p-4 flex justify-between items-center">
        <div>
          <h3>Now Playing:</h3>
          <p>Song Title - Artist Name</p>
        </div>
        <div>
          <button className="bg-blue-500 p-2 rounded">Play</button>
          <button className="bg-blue-500 p-2 rounded ml-2">Pause</button>
        </div>
      </footer>
    </>
  );
}
export default Footer;
