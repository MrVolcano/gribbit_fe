import { RxAvatar } from "react-icons/rx";
import timeAgo from "../utils/timeAgo";
import { useUser } from "../Contexts/UserContexts";
// import { Button } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function CommentCard({
  comment_id,
  author,
  created_at,
  body,
  votes,
  isNew = false,
  onDelete,
}) {
  const { username } = useUser();

  return (
    <div className={`comment-card ${isNew ? "pulse" : ""}`}>
      <div className="comment-author-container">
        <span className="comment-author">
          <RxAvatar style={{ color: "grey", marginRight: "0.3rem" }} />
          {author}
        </span>
        <span className="comment-date">{timeAgo(created_at)}</span>
      </div>
      <div className="comment-body-container">{body}</div>
      <div className="comment-votes-date-container">
        <span>Votes: {votes}</span>
        {username === author && (
          <Button
            variant="danger"
            size="sm"
            className="ms-2"
            onClick={() => onDelete(comment_id)}
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}
