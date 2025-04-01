import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { updateVotes } from "./apiFunctions";
import { useEffect, useState } from "react";

export default function Votes({ article }) {
  const [votesCount, setVotesCount] = useState(0);
  useEffect(() => {
    setVotesCount(article.votes);
  }, []);


  const handleVote = (increment) => {
    console.log(`Voted ${increment} for article ID: ${article.article_id}`);

    // Logic to prevent votes count going below zero
    const newVotesCount = votesCount + increment;
    if (newVotesCount < 0) {
      console.log("Vote count cannot go below zero.");
      return;
    }
    setVotesCount(newVotesCount);
    updateVotes(article.article_id, increment);
  };

  return (
    <span>
      Votes: {votesCount}
      <span onClick={() => handleVote(+1)} style={{ cursor: "pointer" }}>
        <FaArrowAltCircleUp style={{ marginLeft: "10px", color: "gold" }} />
      </span>
      <span
        onClick={() => handleVote(-1)}
        style={{ marginLeft: "5px", cursor: "pointer" }}
      >
        <FaArrowAltCircleDown style={{ color: "red" }} />
      </span>
    </span>
  );
}
