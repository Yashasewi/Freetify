import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//     method: "GET",
//     headers: {
//         "X-RapidAPI-Key": "8536ce072emsh09da9f9a586221ep156538jsn13889d629b7f",
//         "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
//     },
// };

export const spotifyApi = createApi({
    reducerPath: "spotifyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://spotify-scraper.p.rapidapi.com/v1/",
        prepareHeaders: (headers) => {
            headers.set(
                "X-RapidAPI-Key",
                "8536ce072emsh09da9f9a586221ep156538jsn13889d629b7f"
            );
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopTracks: builder.query({
            query: () => "chart/tracks/top?type=weekly",
        }),
        getAlbums: builder.query({
            query: () => "",
        }),
        getArtists: builder.query({
            query: () => "",
        }),
        getPlaylists: builder.query({
            query: () => "",
        }),
        getGenres: builder.query({
            query: () => "",
        }),
    }),
});

export const {
    useGetTopTracksQuery,
} = spotifyApi;
