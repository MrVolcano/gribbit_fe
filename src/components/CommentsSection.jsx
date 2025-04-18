import { useEffect, useState } from "react";
import { deleteComment, fetchComments } from "../utils/apiFunctions";
import CommentCard from "./CommentCard";
import CustomSpinner from "./CustomSpinner";
import CommentForm from "./CommentForm";
import { useError } from "../Contexts/ErrorContext";

export default function CommentsComponent({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState({});
  const { showError } = useError();

  console.log("Passed Article_id:", article_id);

  function fetchCommentsData() {
    console.log("Running useEffect block");
    setError(false);
    setIsLoading(true);
    fetchComments(article_id)
      .then((commentsFromApi) => {
        console.log(commentsFromApi);
        setComments(commentsFromApi.comments);
      })
      .catch((error) => {
        console.error(
          `error fetching comments for article: ${article_id}`,
          error
        );
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
        console.log("comments is set to: ", comments);
      });
  }

  useEffect(() => {
    fetchCommentsData();
  }, [article_id]);

  function handleAddComment(newComment) {
    setComments((prevComments) => [
      { ...newComment, isNew: true },
      ...prevComments,
    ]);
    console.log("New comments array:", comments);
    setTimeout(() => {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.comment_id === newComment.comment_id
            ? { ...comment, isNew: false }
            : comment
        )
      );
    }, 2000);
  }

  function handleDeleteComment(comment_id) {
    deleteComment(comment_id)
      .then((response) => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== comment_id)
        );
      })
      .catch((error) => {
        showError("Failed to delete Comment");
      });
  }

  if (isLoading) {
    return <CustomSpinner message={"Loading Comments..."} />;
  }

  if (error) {
    return (
      <>
        <br />
        <p>Problem loading comments</p>
      </>
    );
  }

  return (
    <div>
      <h2 style={{ marginTop: "1rem", textAlign: "right" }}>
        {comments.length} Comments
      </h2>
      <CommentForm article_id={article_id} onCommentAdded={handleAddComment} />
      {comments.map((comment) => (
        <CommentCard
          key={comment.comment_id}
          {...comment}
          onDelete={handleDeleteComment}
        />
      ))}
    </div>
  );
}
