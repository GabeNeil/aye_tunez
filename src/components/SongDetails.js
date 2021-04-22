import React from "react";

const SongDetails = ({ selectedSong }) => {
  return (
    <div id="song-details">
      <h4>{selectedSong.title.label}</h4>
      <p>Genre: {selectedSong.category.attributes.term}</p>
      <p>
        <img src={selectedSong["im:image"][2]["label"]} />
      </p>
      <a href={selectedSong.link[0].attributes.href}>Buy here</a>
    </div>
  );
};

export default SongDetails;
