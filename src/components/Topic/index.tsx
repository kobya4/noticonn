import React, { useState } from "react";
import { TOPICS_STORAGE_KEY } from "../../constants";
import "./style.css";

const Topic: React.FC = () => {
  const [topic, setTopic] = useState<string>(
    localStorage.getItem(TOPICS_STORAGE_KEY) || ""
  );

  const topicTag = (
    topic
    ?
      <span className="tag topic-tag">
        {`# ${topic}`}
        <button className="delete is-small"></button>
      </span>
    :
      <p className="topic-notfound">
        トピックが登録されていません
      </p>
  );

  return (
    <div className="Topic">
      {topicTag}
    </div>
  );
};

export default Topic;
