import { useState } from "react";
import { postComment } from "../utils/apiFunctions";

export default function CommentForm({ article_id }) {
  console.log("CommentForm called with ", article_id);
  const [newComment, setNewComment] = useState({
    username: "tickle122",
  });

  function handleChange(event) {
    setNewComment({ ...newComment, body: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("running handleSubmit", article_id, newComment);

    postComment(article_id, newComment)
      .then((result) => {
        console.log("Result", result);
        if (result) {
          console.log("Comment submitted");
          setNewComment({ ...newComment, body: "" });
        }
      })
      .catch((error) => {
        console.error("Submission error:", error);
      });
  }

  return (
    <>
      <form>
        <label>
          Comment:
          <input
            name="comment"
            value={newComment.body}
            onChange={handleChange}
            onSubmit={handleSubmit}
          ></input>
          <button onClick={handleSubmit}>Post</button>
        </label>
      </form>
    </>
  );
}
