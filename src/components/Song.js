import React from "react";

const Song = ({ song, index, OnSongClick }) => {

    const handleClick = () => {
      OnSongClick(song)
    }

  return (
    <li onClick={handleClick}>
      {index + 1} - {song.title.label}
    </li>
  );
};

export default Song;
