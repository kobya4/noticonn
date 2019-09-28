import React from "react";
import "./style.css";

interface Props {
  topic: string;
  onClickDelete: Function;
}

const Topic: React.FC<Props> = props => {
  const topicTag = (
    <span className="tag topic-tag">
      {`# ${props.topic}`}
      <button
        className="delete is-small"
        onClick={() => props.onClickDelete(props.topic)}
      ></button>
    </span>
  );

  return <div className="Topic">{topicTag}</div>;
};

export default Topic;
