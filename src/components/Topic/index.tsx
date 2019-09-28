import React from "react";
import "./style.css";

interface Props {
  topic: string;
}

const Topic: React.FC<Props> = props => {
  const topicTag = (
    <span className="tag topic-tag">
      {`# ${props.topic}`}
      <button className="delete is-small"></button>
    </span>
  );

  return <div className="Topic">{topicTag}</div>;
};

export default Topic;
