import React, { useState } from "react";
import { TOPICS_STORAGE_KEY } from "../../constants";
import "./style.css";

interface Topics {
  [props: string]: any;
}

const TopicForm: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [topic, setTopic] = useState<Topics>(
    JSON.parse(localStorage.getItem(TOPICS_STORAGE_KEY) || "{}")
  );

  const onChangeInput = (value: string) => {
    setValue(value);
  };

  const onClickAdd = () => {
    topic[`${value}`] = value;
    localStorage.setItem(TOPICS_STORAGE_KEY, JSON.stringify(topic));
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
