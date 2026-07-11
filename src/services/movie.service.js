import api from "./api";
const today = new Date().toISOString().split("T")[0]
export const movieService = {
    getTrending: async () => {
        const { data } = await api.get("/trending/movie/week");
        return data.results
    },
    getPopular: async () => {
        const { data } = await api.get("/movie/popular", {
            params: {
                page: 3,
            }
        });
        return data.results
    },
    getTvPopular: async () => {
        const { data } = await api.get("/tv/popular");
        return data.results
    },
    getUpcoming: async () => {
        const today = new Date().toISOString().split("T")[0];
        const nextYear = today.split("-");
        nextYear[0] = String(Number(nextYear[0]) + 1);
        const nextYearStr = nextYear.join("-");
        console.log(today)
  const requests = [1, 2, 3 , 4 , 5 ].map((page) =>
    api.get("/discover/movie", {
      params: {
        page,
        sort_by: "popularity.desc",
        "primary_release_date.gte": today,
        "primary_release_date.lte": nextYearStr,
      },
    })
  );

  const responses = await Promise.all(requests);

  return {
    results: responses.flatMap((res) => res.data.results),
  };
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

    getMovie: async (id) => {
        const { data } = await api.get(`/movie/${id}?append_to_response=credits,videos,recommendations` );
        return data
    },

    getGenre: async (id , page , sortBy) => {
        const { data } = await api.get("/discover/movie", {
            params:{
                with_genres: id,
                page,
                sort_by: sortBy , 
            }
        } );
        return data
    },
    
}