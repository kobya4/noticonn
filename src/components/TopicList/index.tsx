import React, { useState } from "react";
import Topic from "../Topic";
import "./style.css";
import { TOPICS_STORAGE_KEY } from "../../constants";

const TopicList: React.FC = () => {
  const [topic, setTopic] = useState<object>(
    JSON.parse(localStorage.getItem(TOPICS_STORAGE_KEY) || "{}")
  );
  const topicKeys = Object.keys(topic);
  const topics = topicKeys.length ? (
    <ul>
      {topicKeys.map(key => {
        return (
          <li>
            <Topic topic={key} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="topic-notfound">トピックが登録されていません</p>
  );

  return <div className="TopicList">{topics}</div>;
};

export default TopicList;
