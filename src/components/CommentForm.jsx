import { useState } from "react";
import { postComment } from "../utils/apiFunctions";
import { useError } from "../Contexts/Error";
import { Button } from "react-bootstrap";

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
      <form onSubmit={handleSubmit} className="mb-3 d-flex align-items-center">
        <input
          type="text"
          className="form-control me-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          style={{ flex: "1" }}
        ></input>
        <Button type="submit" variant="primary">
          Post
        </Button>
      </form>
    </>
  );
}
