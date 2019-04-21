import axios from "axios";

class UnsplashClient {
  constructor() {
    this.axiosClient = axios.create({
      baseURL: "https://api.unsplash.com",
      headers: {
        Authorization:
          "Client-ID 7c75bbc8efb34da53bd59b0523538e34f650c201d07ba87a9c4d4a0fd9092db9"
      }
    });
  }

  getImagesBySearchTerm = async searchTerm => {
    const response = await this.axiosClient.get("search/photos", {
      params: {
        query: searchTerm
      }
    });

    return response.data.results;
  };
}

export default new UnsplashClient();
