import React, { useState } from "react";
import { TOPICS_STORAGE_KEY } from "./constants";
import TopicForm from "./components/TopicForm";
import TopicList from "./components/TopicList";
import "./App.css";

interface Topics {
  [props: string]: any;
}

const App: React.FC = () => {
  const [topics, setTopic] = useState<Topics>(
    JSON.parse(localStorage.getItem(TOPICS_STORAGE_KEY) || "{}")
  );

  const onClickAdd = (value: string) => {
    topics[value] = value;
    setTopic({ ...topics });
    localStorage.setItem(TOPICS_STORAGE_KEY, JSON.stringify(topics));
  };

  const onClickDelete = (topic: string) => {
    delete topics[topic];
    setTopic({ ...topics });
    localStorage.setItem(TOPICS_STORAGE_KEY, JSON.stringify(topics));
  };

  return (
    <div className="App">
      <header className="App-header">NotiConn</header>
      <div className="App-body">
        <TopicList
          topicKeys={Object.keys(topics)}
          onClickDelete={onClickDelete}
        />
        <TopicForm onClickAdd={onClickAdd} />
      </div>
    </div>
  );
};

export default App;
