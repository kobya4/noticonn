import React, { useState } from "react";
import "./style.css";

interface Props {
  message: string;
  clearMessage: Function;
  onClickAdd: Function;
}

const TopicForm: React.FC<Props> = props => {
  const [value, setValue] = useState<string>("");

  const onChangeInput = (value: string) => {
    setValue(value);
    props.clearMessage();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      props.onClickAdd(value);
      setValue("");
    }
  };

  return (
    <div className="TopicForm">
      <p className="error-message">{props.message}</p>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            onKeyDown={e => onKeyDown(e)}
            onChange={e => onChangeInput(e.target.value)}
            className="input"
            type="text"
            placeholder="興味のあるトピックを入力"
            value={value}
          />
        </div>
        <div className="control">
          <button
            onClick={() => {
              props.onClickAdd(value);
              setValue("");
            }}
            className="button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicForm;
