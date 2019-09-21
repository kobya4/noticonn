import React, { useState } from "react";
import { TOPICS_STORAGE_KEY } from "../../constants";
import "./style.css";

const Topic: React.FC = () => {
  const [topic, setTopic] = useState<string>(
    localStorage.getItem(TOPICS_STORAGE_KEY) || ""
  );

  return (
    <div className="Topic">
      <span className="tag">
        {`# ${topic}`}
        <button className="delete is-small"></button>
      </span>
    </div>
  );
};

export default Topic;
