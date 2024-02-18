import SongBar from './SongBar';   

const RelatedSongs = ( { data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => (
  <div className='flex flex-col'>
    <h1 className="text-white font-bold text-3xl mb-10">Related Songs</h1>
    <div className='mt-6 w-full flex flex-col'>
      {data?.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
