import {
  API_BASE_URL,
  TOPICS_STORAGE_KEY,
  PLACE_STORAGE_KEY,
  EVENTS_STORAGE_KEY,
  DEFAULT_PLACE_ID,
} from "./constants";
import axios from "axios";
import qs from "qs";
import { Event } from "./model/event";
type NotiConnAPIResponse = {
  message: Array<Event>;
};

const pushNotification = (event: Event) => {
  const options = {
    iconUrl: "icon128.png",
    type: "basic",
    title: `NotiConn`,
    message: `${event.topic}に関連するイベントが公開されました\n${event.title} by ${event.owner}\n${event.url}`,
  };

  chrome.notifications.create(event.url, options);
};

const saveEvents = (events: Array<Event>) => {
  if (events.length === 0) {
    return;
  }

  events.splice(10);
  localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
};

const fetchEvents = async (topics: string[], place: string) => {
  await axios
    .get<NotiConnAPIResponse>(`${API_BASE_URL}/events`, {
      params: { topics, place },
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    })
    .then(response => {
      const { data: events } = response;
      saveEvents(events.message);
      events.message.forEach(event => {
        pushNotification(event);
      });
    });
};

const main = () => {
  // UTCの 1970/01/01 00:15:00 基準
  const when = new Date(Date.UTC(70, 1)).setHours(0, 15, 0, 0);
  const periodInMinutes = 60;
  const alarmName = "fetchEvents";

  chrome.alarms.create(alarmName, { when, periodInMinutes });

  chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === alarmName) {
      const topics = Object.keys(
        JSON.parse(localStorage.getItem(TOPICS_STORAGE_KEY) || "{}")
      );
      const place =
        JSON.parse(localStorage.getItem(PLACE_STORAGE_KEY) || "{}").value ||
        DEFAULT_PLACE_ID;
      if (topics.length === 0) {
        return;
      }
      fetchEvents(topics, place);
    }
  });

  chrome.notifications.onClicked.addListener(notificationId => {
    chrome.tabs.create({ url: notificationId });
    chrome.notifications.clear(notificationId);
  });
};

main();
