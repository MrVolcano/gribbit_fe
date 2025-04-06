import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { fetchTopics } from "../utils/apiFunctions";
import { useError } from "../Contexts/ErrorContext";

export default function TopicSelector() {
  console.log("TopicSelector running");
  const [topics, setTopics] = useState([]);
  const { showError } = useError();
  const [isLoading, setIsLoading] = useState(true);
  console.log(`Topics : ${topics}`);

  useEffect(() => {
    fetchTopics()
      .then(({ topics: fetchedTopics }) => {
        console.log("TopicData :", fetchedTopics);
        setTopics(fetchedTopics);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Topics");
        showError(`Failed to load Topics: ${error.message}`);
      });
  }, []);

  console.log("Topics:", topics);

  return (
    <DropdownButton title="Filter Topic">
      {isLoading && <Dropdown.Item>Loading...</Dropdown.Item>}
      {topics.map((topic) => (
        <Dropdown.Item key={topic.slug}>{topic.slug}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
