import React from "react";

const Header = () => {
  return (
    <div>
      <header className='"bg-gray-800 p-4 flex justify-between items-center'>
        <h1 className="text-2xl"> My Music App </h1>
        <nav>
          <a hlef="#library" className="px-4">
            Library
          </a>
          <a hlef="#My Shelfs" className="px-4">
            My Shelfs
          </a>
          <a hlef="#settings" className="px-4">
            Settings
          </a>
        </nav>
      </header>
    </div>
  );
};

export default header;
