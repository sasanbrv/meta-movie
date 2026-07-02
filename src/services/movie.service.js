import api from "./api";
const today = new Date().toISOString().split("T")[0]
export const movieService = {
    getTrending: async () => {
        const { data } = await api.get("/trending/movie/week");
        return data.results
    },
    getPopular: async () => {
        const { data } = await api.get("/movie/popular");
        return data.results
    },
    getTvPopular: async () => {
        const { data } = await api.get("/tv/popular");
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

    getLatestReleased: async () => {
        const { data } = await api.get("discover/movie" , {
            params:{
                sort_by: "primary_release_date.desc",
                "primary_release_date.lte": today
            }
        });
        return data.results
    },
    
}