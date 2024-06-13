import React, { useState } from "react";
import Albums from "../assets/data/dummyAlbums.json";

const LibTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePlaylist = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-20 pb-24 p-4">
      <h1 className="title">Lib-Test</h1>
      {/* グリッド配置 */}
      <div className="grid grid-cols-2 gap-5">
        {/* 開閉できるプレイリスト */}
        <div className="relative w-full">
          <button className="bg-slate-400" onClick={togglePlaylist}>
            {" "}
            開閉{" "}
          </button>
          <div
            className={`cursor-pointer ${
              isOpen ? "grid grid-cols-6 gap-2" : "relative"
            }`}
          >
            {Albums.map((album, index) => (
              <img
                key={album.id}
                src={album.cover}
                alt={album.alt}
                className={`w-40 h-40 object-cover transition-transform duration-300 ${
                  isOpen ? "w-full h-full" : "absolute"
                } ${
                  !isOpen
                    ? "hover:translate-y-[-10px] hover:translate-x-[20px]"
                    : ""
                }`}
                style={{
                  top: !isOpen ? `${index * 20}px` : "unset",
                  left: !isOpen ? "0px" : "unset",
                }}
              />
            ))}
          </div>
        </div>
        {/* 円形のアルバム一覧 */}
        <div className="relative m-2 w-60 h-full">
          <h2> Albumtest2 </h2>
          {Albums.map((album, index) => (
            <div
              key={index}
              className="absolute m-6"
              style={{ top: `${index * 30}px`, left: "0px" }}
            >
              <img
                src={album.cover}
                alt={album.alt}
                className="w-40 h-40 rounded-full object-cover transition-transform duration-300 hover:translate-y-[-20px] hover:z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibTest;
