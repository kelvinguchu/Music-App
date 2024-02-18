import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, RelatedSongs, Loader } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";

import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching, isFetchingSongsDetails } = useGetSongDetailsQuery({ songid });
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });

      const handlePauseClick = ( ) => {
  dispatch(playPause(false));
}

const handlePlayClick = ( song, data, i) => { 
  dispatch(setActiveSong({ song, data, i }));
  dispatch(playPause(true));
  }

    if (isFetching || isFetchingSongsDetails || isFetchingRelatedSongs) return <Loader title="Searching song details" />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <DetailsHeader
                artistId = {artistId}
                songData={songData} />
        <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((line, i) => (
                        <p className="text-gray-400 text-base my-1">{line}</p>
                    )) : <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>}
                </div>
            </div>
            
            <RelatedSongs
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
            />
        </div>
    )
};

export default SongDetails;
