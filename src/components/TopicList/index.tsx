import React, { useState } from "react";
import Topic from "../Topic";
import "./style.css";
import { TOPICS_STORAGE_KEY } from "../../constants";

const TopicList: React.FC = () => {
  const [topic, setTopic] = useState<string>(
    localStorage.getItem(TOPICS_STORAGE_KEY) || ""
  );

  const topics = topic ? (
    <Topic topic={topic} />
  ) : (
    <p className="topic-notfound">トピックが登録されていません</p>
  );

  return <div className="TopicList">{topics}</div>;
};

export default TopicList;
