import Badge from "react-bootstrap/Badge";
import { RxAvatar } from "react-icons/rx";

export default function AuthorAvatar({ author }) {
  return (
    <>
      <Badge pill bg="primary" style={{ padding: "0.5rem 1rem 0.5rem 1rem" }}>
        <RxAvatar size={20} style={{ marginRight: '0.5rem' }}/> {author}
      </Badge>
    </>
  );
}
