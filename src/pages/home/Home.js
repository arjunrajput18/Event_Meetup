import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SingleCard } from "../../components/singleCard/SingleCard";
import "./Home.css";
import EventForm from "../../components/FormModal/EventForm";

export const Home = () => {
  const [showEventForm, setShowEventForm] = useState(false);
  const [filters, setFilters] = useState({
    searchVal: "",
    sortBy: null,
    eventType: "",
  });

  const eventsData = useSelector((state) => state.events);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const transformed = () => {
    let filterData = [...eventsData];
    if (filters.searchVal) {
      filterData = filterData.filter((data) =>
        data.name.toLowerCase().includes(filters.searchVal.toLowerCase())
      );
    }

    if (filters.sortBy) {
      filterData = filterData.sort((a, b) => {
        const date1 = new Date(a.startDate);
        const date2 = new Date(b.startDate);
        return filters.sortBy === "Oldest" ? date1 - date2 : date2 - date1;
      });
    }

    if (filters.eventType) {
      filterData = filterData.filter((data) => data.type === filters.eventType);
    }
    return filterData;
  };

  return (
    <div>
      <div className="header-container">
        <button
          className="addNewEvent-btn"
          onClick={() => setShowEventForm(true)}
        >
          Add New Event
        </button>
        <div className="sort-section">
          <label className="event-type-label">SortBy:</label>
          <label className="sort-label">
            <input
              type="radio"
              name="sortBy"
              value="Latest"
              checked={filters.sortBy === "Latest"}
              onChange={handleChange}
              className="sort-radio"
            />{" "}
            Latest
          </label>
          <label className="sort-label">
            <input
              type="radio"
              name="sortBy"
              value="Oldest"
              checked={filters.sortBy === "Oldest"}
              onChange={handleChange}
              className="sort-radio"
            />{" "}
            Oldest
          </label>
        </div>
        <div className="event-type-select">
          <label className="event-type-label">Event Type:</label>
          <select
            name="eventType"
            onChange={handleChange}
            className="event-type-select"
            value={filters.eventType}
          >
            <option value="">Select Type</option>
            <option value="Sports">Sports</option>
            <option value="Music">Music</option>
            <option value="General">General</option>
            <option value="Children">Children</option>
            <option value="School">School</option>
          </select>
        </div>
        <div>
          <label className="event-type-label">Search:</label>
          <input
            type="search"
            className="inputSearch"
            placeholder="search by Event Name.."
            onChange={handleChange}
            name="searchVal"
            value={filters.searchVal}
          />
        </div>
        <button
          className="btn-clear"
          onClick={() =>
            setFilters({
              searchVal: "",
              sortBy: null,
              eventType: "",
            })
          }
        >
          Clear Filters
        </button>
      </div>
      {showEventForm && <EventForm setShowEventForm={setShowEventForm} />}
      <div className="listEvents">
        {transformed().length === 0 ? (
          <div>
            <h2>No events available</h2>
          </div>
        ) : (
          transformed().map((data) => (
            <SingleCard
              data={data}
              key={data.id}
              setShowEventForm={setShowEventForm}
            />
          ))
        )}
      </div>
    </div>
  );
};
