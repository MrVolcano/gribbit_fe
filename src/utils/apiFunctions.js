import axios from "axios";

const api = axios.create({
  baseURL: "https://news-q339.onrender.com/api",
});

export function fetchArticles(topic) {
  // let topics = "football";
  let searchParams = "";
  if (topic) searchParams = `?topic=${topic}`;
  return new Promise((resolve, reject) => {
    api
      .get(`/articles${searchParams}`)
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

export function deleteComment(commentId) {
  return new Promise((resolve, reject) => {
    api
      .delete(`/comments/${commentId}`)
      .then((response) => {
        console.log(`comment ${commentId} deleted`);
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
        reject(error);
      });
  });
}
