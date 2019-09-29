import { API_BASE_URL, TOPICS_STORAGE_KEY } from "./constants";
import axios from "axios";

type Event = {
  id: number;
  title: string;
  author: string;
  url: string;
};

type MockResponse = Array<Event>;

const pushNotification = (event: Event) => {
  const options = {
    iconUrl: "icon128.png",
    type: "basic",
    title: `NotiConn | ${event.title}`,
    message: event.url
  };

  chrome.notifications.create(event.url, options);
};

const fetchEvents = async (topics: string[]) => {
  await axios
    .get<MockResponse>(`${API_BASE_URL}/posts`, { params: { topics } })
    .then(response => {
      const { data: events } = response;
      events.forEach(event => {
        pushNotification(event);
      });
    });
};

const main = () => {
  const periodInMinutes = 1;
  const alarmName = "fetchEvents";

  chrome.alarms.create(alarmName, { periodInMinutes });

  chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === alarmName) {
      const topics = Object.keys(
        JSON.parse(localStorage.getItem(TOPICS_STORAGE_KEY) || "{}")
      );
      if (topics.length === 0) {
        return;
      }
      fetchEvents(topics);
    }
  });

  chrome.notifications.onClicked.addListener(notificationId => {
    chrome.tabs.create({ url: notificationId });
    chrome.notifications.clear(notificationId);
  });
};

main();
