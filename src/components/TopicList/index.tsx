import React from "react";
import Topic from "../Topic";
import "./style.css";

interface Props {
  topicKeys: string[];
  onClickDelete: Function;
}

const TopicList: React.FC<Props> = props => {
  const topics = props.topicKeys.map((key, index) => {
    return (
      <Topic key={index} topic={key} onClickDelete={props.onClickDelete} />
    );
  });

  return props.topicKeys.length ? (
    <div className="TopicList">{topics}</div>
  ) : (
    <p className="topic-notfound">トピックが登録されていません</p>
  );
};

export default TopicList;
