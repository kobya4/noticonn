import React from "react";
import { Event } from "../../model/event";
import { EVENTS_STORAGE_KEY } from "../../constants";
import "./style.css";

const History: React.FC = () => {
  const newestEvents: Array<Event> = JSON.parse(
    localStorage.getItem(EVENTS_STORAGE_KEY) || "[{}]"
  );

  return (
    <div>
      {Object.keys(newestEvents[0]).length > 0 ? (
        newestEvents.map(event => {
          return (
            <div key={event.url} className="card">
              <div className="card-content">
                <div className="content">
                  <a href={event.url} target="_blank">
                    {event.title}
                  </a>
                  <br />
                  <small>
                    {event.topic}に関連 by {event.owner}
                  </small>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="event-notfound">最近のイベントはありません</p>
      )}
    </div>
  );
};

export default History;
