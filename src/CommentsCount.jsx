export default function CommentsCount({ comment_count }) {
  console.log("Comments Count:", comment_count);
  return <span>Comments: {comment_count}</span>;
}
