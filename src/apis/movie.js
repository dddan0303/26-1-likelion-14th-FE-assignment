import api from "./axios";

export const getPopularMovies = async () => {
  const response = await api.get("/movie/popular");

  return response.data;
};
