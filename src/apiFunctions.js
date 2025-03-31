import axios from "axios";

const api = axios.create({
  baseURL: "https://news-q339.onrender.com/api",
  //   timeout: 1000,
});

export function fetchAllArticles() {
  return new Promise((resolve, reject) => {
    api
      .get("/articles")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
