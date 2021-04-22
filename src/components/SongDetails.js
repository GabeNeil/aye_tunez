import React from 'react';

const SongDetails = ({selectedSong}) => {
  return(
      <div>
          <h3>{selectedSong.title.label}</h3> 
          <p>Genre: {selectedSong.category.attributes.term}</p>
          
      </div>
  )
}

export default SongDetails;