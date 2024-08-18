import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export interface Photo {
  id: string;
  description: string;
  urls: { small: string; regular: string };
}

export const fetchPhotos = async (
  query: string,
  currentPage: number
): Promise<Photo[]> => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page: currentPage,
      per_page: 12,
      orientation: "landscape",
      client_id: "-Ihntoslb4J-N5bygVEI29aL84Rny6RhSC7iopj2MQQ",
    },
  });

  return response.data.results;

  /// return response.data.results as Photo[] /////???///
};
