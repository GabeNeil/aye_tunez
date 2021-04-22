import React, { useState, useEffect } from "react";
import SongList from "../components/SongList.js";
import SongDetails from "../components/SongDetails.js"

const ChartContainer = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = function () {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then((results) => results.json())
      .then((songs) => setSongs(songs.feed.entry));
  };

  const OnSongClick = function (song) {
      setSelectedSong(song);
  }

  return (
    <div class="song-list-wrapper">
        
        <SongList songs={songs} OnSongClick={OnSongClick} /> 
      { selectedSong ? <SongDetails selectedSong={selectedSong}/> : null}
</div>
  )
 

  
};

export default ChartContainer;
