import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className='absolute top-0 w-full p-4 z-30 flex items-center justify-between bg-gray-200 shadow-lg'>
        <h1 className="text-2xl"> My Music App </h1>
        <nav>
            <a><Link to="/">Main　</Link></a>
            <a><Link to="/test">テスト　</Link></a>
            <a><Link to="/libtest">ライブラリテスト　</Link></a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
