import React from "react";
import Dropdown from "react-dropdown";
import { PREFECTURES, PREF_STORAGE_KEY } from "../../constants";
import "./style.css";
import "react-dropdown/style.css";

const Config: React.FC = () => {
  const options = Object.entries(PREFECTURES).map(([key, value]) => {
    return { value: key, label: value };
  });
  const currentPref = JSON.parse(
    localStorage.getItem(PREF_STORAGE_KEY) || "{}"
  );

  const onChange = (pref: Object) => {
    localStorage.setItem(PREF_STORAGE_KEY, JSON.stringify(pref));
  };

  return (
    <div>
      <p className="config-item">通知を受け取るイベント開催地域</p>
      <Dropdown
        options={options}
        onChange={e => onChange(e)}
        value={
          Object.keys(currentPref).length === 0 ? options[12] : currentPref
        }
      />
    </div>
  );
};

export default Config;
