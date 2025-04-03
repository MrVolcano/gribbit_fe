import { RxAvatar } from "react-icons/rx";
import timeAgo from "../utils/timeAgo";

export default function CommentCard(comment) {
  return (
    <div className="comment-card">
      <div className="comment-author-container">
        <span className="comment-author">
          <RxAvatar style={{ color: "grey", marginRight: "0.3rem" }} />
          {comment.author}
        </span>
        <span className="comment-date">{timeAgo(comment.created_at)}</span>
      </div>
      <div className="comment-body-container">{comment.body}</div>
      <div className="comment-votes-date-container">
        <span>Votes: {comment.votes}</span>
      </div>
    </div>
  );
}
