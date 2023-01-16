import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

export const SongCard = ({ songs, i }) => {
    const activeSong = "test";

    // console.log(songs[i].album.cover[0].url);
    console.log(songs[i].artists[0].name);

    return (
        <div className=" flex flex-col w-[250px] p-4 bg-gray-500  bg-opacity-10 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="relative w-full h-56 group">
                <div
                    className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
                        activeSong?.title === songs[0].name
                            ? "flex bg-black bg-opacity-70"
                            : "hidden"
                    }`}
                >
                    <PlayPause />
                </div>
                <img src={songs[i].album.cover[0].url} alt="song_img" />
            </div>
            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-lg text-white truncate">
                    <Link to={`/song/${songs[i].id}`}>{songs[i].name}</Link>
                </p>
                <p className="text-sm truncate text-gray-300 mt-1">
                    <Link to={`/artist/${songs[i].artists[0].id}`}>
                        {songs[i].artists.map((song) => {
                            return songs[i].artists.indexOf(song) ===
                                songs[i].artists.length - 1
                                ? song.name
                                : song.name + ", ";
                        })}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SongCard;
