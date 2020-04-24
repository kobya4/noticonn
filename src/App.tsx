import React, { useState } from "react";
import { TOPICS_STORAGE_KEY } from "./constants";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TopicForm from "./components/TopicForm";
import TopicList from "./components/TopicList";
import History from "./components/History";
import Config from "./components/Config";
import "./App.css";
import "react-tabs/style/react-tabs.css";

interface Topics {
  [props: string]: any;
}

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [topics, setTopic] = useState<Topics>(
    JSON.parse(localStorage.getItem(TOPICS_STORAGE_KEY) || "{}")
  );

  const validateValue = (value: string): boolean => {
    if (value) {
      return true;
    }
    return false;
  };

  const onClickAdd = (value: string) => {
    value = value.trim();

    if (!validateValue(value)) {
      return;
    }
    if (topics[value]) {
      setMessage("登録済みのトピックです");
      return;
    }

    topics[value] = value;
    setTopic({ ...topics });
    localStorage.setItem(TOPICS_STORAGE_KEY, JSON.stringify(topics));
  };

  const clearMessage = () => {
    setMessage("");
  };

  const onClickDelete = (topic: string) => {
    delete topics[topic];
    setTopic({ ...topics });
    localStorage.setItem(TOPICS_STORAGE_KEY, JSON.stringify(topics));
    clearMessage();
  };

  return (
    <div className="App">
      <header className="App-header">NotiConn</header>
      <div className="App-body">
        <Tabs>
          <TabList>
            <Tab>トピック</Tab>
            <Tab>最近のイベント</Tab>
            <Tab>通知設定</Tab>
          </TabList>

          <TabPanel>
            <TopicList
              topicKeys={Object.keys(topics)}
              onClickDelete={onClickDelete}
            />
            <TopicForm
              onClickAdd={onClickAdd}
              message={message}
              clearMessage={clearMessage}
            />
          </TabPanel>
          <TabPanel>
            <History></History>
          </TabPanel>
          <TabPanel>
            <Config />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
