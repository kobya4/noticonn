import React, { useState } from "react";
import { TOPICS_STORAGE_KEY } from "../../constants";
import "./style.css";

const TopicForm: React.FC = () => {
  const [topic, setTopic] = useState<string>(
    localStorage.getItem(TOPICS_STORAGE_KEY) || ""
  );

  const onChangeInput = (value: string) => {
    setTopic(value);
  };

  const onClickAdd = () => {
    localStorage.setItem(TOPICS_STORAGE_KEY, topic);
  };

  return (
    <div className="TopicForm">
      <div className="field is-grouped">
        <div className="control is-expanded">
          <input
            onChange={e => onChangeInput(e.target.value)}
            className="input"
            type="text"
            placeholder="興味のあるトピックを入力"
          />
        </div>
        <div className="control">
          <a onClick={() => onClickAdd()} className="button is-primary">
            Add
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopicForm;
