import api from "./api";

export const movieService = {
    getTrending: async () => {
        const { data } = await api.get("/trending/movie/day");
        return data.results
    },
    getPopular: async () => {
        const { data } = await api.get("/movie/popular");
        return data.results
    },
    getTopRated: async () => {
        const { data } = await api.get("/movie/top_movie");
        return data.results
    },
    getUpcoming: async () => {
        const { data } = await api.get("/movie/upcoming");
        return data.results
    },
    getNowPlaying: async () => {
        const { data } = await api.get("/movie/now_playing");
        return data.results
    },
    
}