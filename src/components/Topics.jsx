import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTopics } from "../api";
import HandleError from "./HandleError";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTopics()
      .then((res) => {
        setTopics(res.topics);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (slug) => {
    return () => {
      navigate(`/topics/${slug}`);
    };
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <HandleError error={error} />;
  } else {
    return (
      <div>
        <h2>Topics :</h2>
        <ul>
          {topics.map((topic, index) => {
            return (
              <>
                <li key={index} className="topic_card">
                  <h6 id="topic_card">
                    Topic : {topic.slug}
                    <br />
                    Description : {topic.description}
                  </h6>
                </li>
                <button type="submit" onClick={handleSubmit(topic.slug)}>
                  View Articles on {topic.slug}
                </button>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}
