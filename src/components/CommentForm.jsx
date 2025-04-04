import { useState } from "react";
import { postComment } from "../utils/apiFunctions";
import { useError } from "../Contexts/Error";
import { Button } from "react-bootstrap";

export default function CommentForm({ article_id, onCommentAdded }) {
  console.log("CommentForm called with ", article_id);
  const username = "tickle122";
  const [comment, setComment] = useState("");
  const { showError } = useError();
  const [validationError, setValidationError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setValidationError("");
    const body = { username, body: comment };
    console.log("running handleSubmit", article_id, body);
    if (!comment.trim()) {
      setValidationError("Comment cannot be empty");
      // showError("Comment cannot be empty");
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
    <form onSubmit={handleSubmit} className="mb-3 d-flex align-items-start">
      <div className="flex-grow-1 me-3">
        <div className="position-relative">
          <input
            type="text"
            className={`form-control ${validationError ? "is-invalid" : ""}`}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              setValidationError("");
            }}
            placeholder="Add a comment..."
          />
          {validationError && (
            <div className="invalid-feedback d-block">{validationError}</div>
          )}
        </div>
      </div>
      <Button
        type="submit"
        variant="primary"
        style={{ alignSelf: "flex-start" }}
      >
        Post
      </Button>
    </form>
  );
}
