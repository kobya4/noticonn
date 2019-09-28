import React, { useState } from "react";
import "./style.css";

interface Props {
  onClickAdd: Function;
}

const TopicForm: React.FC<Props> = props => {
  const [value, setValue] = useState<string>("");

  const onChangeInput = (value: string) => {
    setValue(value);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      props.onClickAdd(value);
      setValue("");
    }
  };

  return (
    <div className="TopicForm">
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
          <a
            onClick={() => {
              props.onClickAdd(value);
              setValue("");
            }}
            className="button is-primary"
          >
            Add
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopicForm;
