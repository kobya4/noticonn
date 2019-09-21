import React from "react";
import "./style.css";

const TopicForm: React.FC = () => {
  return (
    <div className="TopicForm">
      <div className="field is-grouped">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="興味のあるトピックを入力"
          />
        </div>
        <div className="control">
          <a className="button is-primary">Add</a>
        </div>
      </div>
    </div>
  );
};

export default TopicForm;
