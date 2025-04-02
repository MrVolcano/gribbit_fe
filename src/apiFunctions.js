import axios from "axios";

const api = axios.create({
  baseURL: "https://news-q339.onrender.com/api",
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

export function fetchArticle(article_id) {
  console.log("article_id:", article_id);
  return new Promise((resolve, reject) => {
    api
      .get(`/articles/${article_id}`)
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
