import React from "react";
import Dropdown from "react-dropdown";
import { PLACES, PLACE_STORAGE_KEY } from "../../constants";
import "./style.css";
import "react-dropdown/style.css";

const Config: React.FC = () => {
  const options = Object.entries(PLACES).map(([key, value]) => {
    return { value: key, label: value };
  });
  const currentPlace = JSON.parse(
    localStorage.getItem(PLACE_STORAGE_KEY) || "{}"
  );

  const onChange = (place: Object) => {
    localStorage.setItem(PLACE_STORAGE_KEY, JSON.stringify(place));
  };

  return (
    <div>
      <p className="config-item">通知を受け取るイベント開催地域</p>
      <Dropdown
        options={options}
        onChange={e => onChange(e)}
        value={
          Object.keys(currentPlace).length === 0 ? options[13] : currentPlace
        }
      />
    </div>
  );
};

export default Config;
