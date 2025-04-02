import { RxAvatar } from "react-icons/rx";

// Function to calculate time ago
const timeAgo = (timestamp) => {
  const now = new Date();
  const commentDate = new Date(timestamp);
  const secondsAgo = Math.floor((now - commentDate) / 1000);

  let interval = secondsAgo / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = secondsAgo / 2592000; // 30 days
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = secondsAgo / 86400; // 1 day
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = secondsAgo / 3600; // 1 hour
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = secondsAgo / 60; // 1 minute
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return secondsAgo + " seconds ago";
};

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
