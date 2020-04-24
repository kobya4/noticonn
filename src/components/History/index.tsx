import React from "react";
import { Event } from "../../model/event";
import { EVENTS_STORAGE_KEY } from "../../constants";

const History: React.FC = () => {
  const newestEvents: Array<Event> = JSON.parse(
    localStorage.getItem(EVENTS_STORAGE_KEY) || "[{}]"
  );

  return (
    <div>
      {newestEvents.map(event => {
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
      })}
    </div>
  );
};

export default History;
