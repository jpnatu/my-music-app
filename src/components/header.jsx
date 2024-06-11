import React from "react";

const Header = () => {
  return (
    <div>
      <header className='absolute top-0 w-full p-4 z-30 flex items-center justify-between bg-black shadow-lg'>
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

export default Header;
