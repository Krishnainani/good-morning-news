import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { fetchTopics } from "./api";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((res) => {
      if (res.msg === "Not Found") {
        setTopics(["bad"]);
      } else {
      setTopics(res.topics);
      setIsLoading(false)
      }
    });
  }, []);


  const navigate = useNavigate();

  const handleSubmit = (slug) => {
    return () => {
      navigate(`/topic/${slug}`);
    };
  };

  if (topics[0] === "bad") {
    return (
      <>
        <h2>Something went wrong</h2>
        <h3>Please try again later!</h3>
      </>
    );
  } else if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Topics :</h2>
      <ul>
        {topics.map((topic) => {
          return (
            <>
              <li className="cards">
                <h6 id="card">
                  Topic : {topic.slug}
                  <br />
                  Description : {topic.description}
                </h6>
              </li>
              <button type="submit" onClick={handleSubmit(topic.slug)}>
                View Articles
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
}
