import React, { useState } from "react";
import Topic from "../Topic";
import "./style.css";

interface Props {
  topics: object;
}

const TopicList: React.FC<Props> = props => {
  const topicKeys = Object.keys(props.topics);
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
