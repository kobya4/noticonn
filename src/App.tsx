import React from "react";
import TopicForm from "./components/TopicForm";
import TopicList from "./components/TopicList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">NotiConn</header>
      <div className="App-body">
        <TopicForm />
        <TopicList />
      </div>
    </div>
  );
};

export default App;
