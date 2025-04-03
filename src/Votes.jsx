import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { updateVotes } from "./apiFunctions";
import { useEffect, useState } from "react";
import { useError } from "./Contexts/Error";

export default function Votes({ article }) {
  const [votesCount, setVotesCount] = useState(0);
  const { showError } = useError();

  useEffect(() => {
    setVotesCount(article.votes);
  }, [article.votes]); 

  const handleVote = (event, increment) => {
    event.stopPropagation();
    console.log(`Voted ${increment} for article ID: ${article.article_id}`);

    const newVotesCount = votesCount + increment;
    if (newVotesCount < 0) {
      console.log("Vote count cannot go below zero.");
      return;
    }
    setVotesCount(newVotesCount);

    updateVotes(article.article_id, increment).catch((error) => {
      console.error("Problem updating vote:", error);
      setVotesCount((currentVotesCount) => currentVotesCount - increment); 
      showError("There was a problem updating the vote. Please try again.");
    });
  };

  return (
    <span>
      Votes: {votesCount}
      <span
        onClick={(event) => handleVote(event, +1)}
        style={{ cursor: "pointer" }}
      >
        <FaArrowAltCircleUp style={{ marginLeft: "10px", color: "gold" }} />
      </span>
      <span
        onClick={(event) => handleVote(event, -1)}
        style={{ marginLeft: "5px", cursor: "pointer" }}
      >
        <FaArrowAltCircleDown style={{ color: "red" }} />
      </span>
    </span>
  );
}