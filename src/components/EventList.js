import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../actions/eventActions";

const EventList = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handleDelete = (eventId) => {
    dispatch(deleteEvent(eventId));
  };

  return (
    <div>
      <h2>Event List</h2>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h3>{event.name}</h3>
              <p>Type: {event.type}</p>
              <p>Start Date: {event.startDate.toDateString()}</p>
              <p>End Date: {event.endDate.toDateString()}</p>
              <p>Description: {event.description}</p>
              <p>Handled By: {event.handledBy}</p>
              <p>Organization: {event.organization}</p>
              <p>Sub-Events: {event.subEventCount}</p>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
