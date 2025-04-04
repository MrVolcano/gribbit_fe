import Spinner from "react-bootstrap/Spinner";

export default function CustomSpinner({ message }) {
  return (
    <>
      <br />
      <p>{message}</p>
      <Spinner />
    </>
  );
}
