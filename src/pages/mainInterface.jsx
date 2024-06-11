import React, {useState} from "react";
import Shelf from "./Shelf";;

const dummyAlbums = [
    { title: 'The Dark Side of the Moon', cover: './assets/DarksideMoon.jpg', date: '1973' , tracks: [1,2,3,4,5,6,7,8,9,10]},
    { title: 'Nursery Cryme', cover: './assets/Chyme.jpg' , date: '1971' },
    { title: 'Close to the Edge', cover: './assets/ClosetotheEdge.jpg' , date: '1972' },
    { title: 'In the Court of the Crimson King', cover: './assets/Crimsonking.jpg', date: '1969' },
    { title: 'Tarkus', cover: './assets/Tarkus.jpg' , date: '1971' },
    { title: 'Thick as a Brick', cover: 'https://via.placeholder.com/150' , date: '1972'},
    { title: 'TempAlbum', cover: 'https://via.placeholder.com/300' , date: '0000'},
    { title: 'TempAlbum', cover: 'https://via.placeholder.com/300' , date: '0000'},
    { title: 'TempAlbum', cover: 'https://via.placeholder.com/300' , date: '0000'}
  ];
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
      <div className="pt-20 pb-24 p-4 overflow-y-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-black">My Library</h1>
        <Shelf title="Progressive Rock" albums={dummyAlbums} />
      </div>
  );
};

export default MainInterface;
