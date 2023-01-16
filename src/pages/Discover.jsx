import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

import { useGetTopTracksQuery } from "../redux/services/spotifyApi";

export default function Discover() {
    // const { data, error, isLoading } = useGetTopTracksQuery();
    // console.log(data);


    // if(isLoading) return <Loader />
    // if(error) return <Error />

    const genreTitle = "Pop";
    return (
        <div className=" flex flex-col">
            <div className=" w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="text-3xl font-bold text-white text-left">
                    Discover {genreTitle} Songs
                </h2>
                <select
                    onChange={() => {}}
                    value=""
                    className=" bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {" "}
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>
                            {genre.title}
                        </option>
                    ))}
                </select>

                <div className=" flex flex-wrap sm:justify-start justify-center gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
                        <SongCard key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}