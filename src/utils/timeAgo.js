// Function to calculate time ago
export default function timeAgo(timestamp) {
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
}
