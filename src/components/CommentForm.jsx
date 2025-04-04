import { useState } from "react";
import { postComment } from "../utils/apiFunctions";
import { useError } from "../Contexts/Error";

export default function CommentForm({ article_id, onCommentAdded }) {
  console.log("CommentForm called with ", article_id);
  const username = "tickle122";
  const [comment, setComment] = useState("");
  const { showError } = useError();

  function handleSubmit(event) {
    event.preventDefault();
    const body = { username, body: comment };
    console.log("running handleSubmit", article_id, body);
    if (!comment.trim()) {
      showError("Comment cannot be empty");
      return;
    }

    postComment(article_id, body)
      .then((result) => {
        if (result) {
          console.log("Comment submitted:", result);
          onCommentAdded(result);
          setComment(""); // reset the comment input
        }
      })
      .catch((error) => {
        showError("Failed to post comment:" + error.message);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        ></input>
        <button type="submit" variant="primary">
          Post
        </button>
      </form>
    </>
  );
}
