import React from "react";
import Song from "./Song.js";

const SongList = ({ songs, OnSongClick}) => {
  const songItems = songs.map((song, index) => {
    return (
      <div>
        <ul>
          <Song song={song} index={index} OnSongClick={OnSongClick}/>
        </ul>
      </div>
    );
  });

  return (
    <div>
      <ul>{songItems}</ul>
    </div>
  );
};

export default SongList;
