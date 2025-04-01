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

export function updateVotes(article_id, increment) {
  console.log("Increment value:", increment);
  return new Promise((resolve, reject) => {
    api
      .patch(`/articles/${article_id}`, { inc_votes: increment })
      .then((response) => {
        console.log("Vote updated successfully:", response);
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Error updating vote:", error);
        reject(error);
      });
  });
}
