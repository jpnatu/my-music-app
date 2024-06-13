import React, {useState} from "react";
import Shelf from "./Shelf";
import Albums from "../assets/data/dummyAlbums.json";

const MainInterface = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const toggleAlbumDetails = (album) => {
    if (selectedAlbum && selectedAlbum.id === album.id) {
      setSelectedAlbum(null);
    } else {
      setSelectedAlbum(album);
    }
  }

  return (
      <div className="flame">
        <h1 className="title">My Library</h1>
        <Shelf title="Progressive Rock" albums={Albums} />
      </div>
  );
};

export default MainInterface;
