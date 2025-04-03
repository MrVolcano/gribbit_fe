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

export function fetchComments(article_id) {
  console.log("Fetching comments for article:", article_id);
  return new Promise((resolve, reject) => {
    api
      .get(`/articles/${article_id}/comments`)
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

export function postComment(article_id, newComment) {
  return new Promise((resolve, reject) => {
    api
      .post(`/articles/${article_id}/comments`, newComment)
      .then((response) => {
        console.log("Comment posted", response);
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Error updating comment:", error);
        reject(error);
      });
  });
}

// POST /api/articles/:article_id/comments": {
//   "description": "creates a comment for the given article_id",
//   "queries": [],
//   "exampleResponse": {
//   "comment_id": 313,
//   "article_id": 1,
//   "body": "my first comment",
//   "votes": 0,
//   "author": "grumpy19",
//   "created_at": "2025-03-12T15:03:39.553Z"
