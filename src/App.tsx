import React, { useState } from "react";
import { TOPICS_STORAGE_KEY } from "./constants";
import TopicForm from "./components/TopicForm";
import TopicList from "./components/TopicList";
import "./App.css";

const App: React.FC = () => {
  const [topics, setTopic] = useState<object>(
    JSON.parse(localStorage.getItem(TOPICS_STORAGE_KEY) || "{}")
  );

  return (
    <div className="App">
      <header className="App-header">NotiConn</header>
      <div className="App-body">
        <TopicForm />
        <TopicList topics={topics} />
      </div>
    </div>
  );
};

export default App;
