import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, editEvent, updateEvent } from "../../actions/eventActions";
import { v4 as uuid } from "uuid";
import {GrClose} from "react-icons/gr"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./EventForm.css";
import { useNavigate } from "react-router-dom";

const EventForm = ({ setShowEventForm }) => {
  const [event, setEvent] = useState({
    id: uuid(),
    name: "",
    type: "",
    eventThumbnail: "https://i.postimg.cc/nhxgbWQ1/pexels-photo-3004909.jpg",
    startDate: null,
    endDate: null,
    description: "",
    handledBy: "",
    organization: "",
    subEventCount: 0,
  });

  const edit_id = useSelector((state) => state.edit_id);
  const eventsData = useSelector((state) => state.events);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleStartDateChange = (date) => {
    setEvent({ ...event, startDate: date });
  };

  const handleEndDateChange = (date) => {
    setEvent({ ...event, endDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit_id) {
      dispatch(updateEvent(event));
    } else {
      dispatch(addEvent(event));
    }
    navigate("/");
    setShowEventForm(false);
    setEvent({
      id: "",
      name: "",
      type: "",
      startDate: null,
      endDate: null,
      description: "",
      handledBy: "",
      organization: "",
      subEventCount: 0,
    });
  };

  const handleClose = () => {
    dispatch(editEvent(null));
    setShowEventForm(false);
    setEvent({
      id: "",
      name: "",
      type: "",
      startDate: null,
      endDate: null,
      description: "",
      handledBy: "",
      organization: "",
      subEventCount: 0,
    });
  };

  useEffect(() => {
    if (edit_id) {
      const itemToBeEdit = eventsData.find((item) => item.id === edit_id);
      let start = null;
      let end = null;
      if (Date.parse(itemToBeEdit.startDate)) {
        start = new Date(itemToBeEdit.startDate);
      }
      if (Date.parse(itemToBeEdit.endDate)) {
        end = new Date(itemToBeEdit.endDate);
      }
      setEvent({ ...itemToBeEdit, startDate: start, endDate: end });
    }

  }, []);
  
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
    document.body.style.overflowY = "scroll";
    };
    });
  

  return (
    <>
      <div className="modalWrapper"></div>
      <div className="event-form">
      <div className="closeBtn-box">
      <button className="closebtn"  onClick={handleClose}><GrClose/></button>
      </div>
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit} className="inner-event-form">
          <div className="formContent">
            <label>Event Name: </label>
            <input
              type="text"
              name="name"
              value={event.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formContent">
            <label>Event Type: </label>
            <select
              name="type"
              value={event.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="General">General</option>
              <option value="Children">Children</option>
              <option value="School">School</option>
            </select>
          </div>

          <div className="formContent">
            <label>Start Date: </label>
            <DatePicker
              selected={event.startDate}
              onChange={handleStartDateChange}
              dateFormat="yyyy-MM-dd"
              required
              closeOnScroll={true} 
            />
          </div>

          <div className="formContent">
            <label>End Date:</label>
            <DatePicker
              selected={event.endDate}
              onChange={handleEndDateChange}
              dateFormat="yyyy-MM-dd"
              minDate={event.startDate} 
              required
              closeOnScroll={true} 
            />
          </div>

          <div className="formContent">
            <label>Description: </label>
            <textarea
              name="description"
              value={event.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="formContent">
            <label>Event Handled By:</label>
            <input
              type="text"
              name="handledBy"
              value={event.handledBy}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formContent">
            <label>Event Organisation:</label>
            <input
              type="text"
              name="organization"
              value={event.organization}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formContent">
            <label>Total Number of Sub-Events:</label>
            <input
              type="number"
              name="subEventCount"
              value={event.subEventCount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="btns-save-cancel">
            <button type="submit" className="view-details">
              {edit_id ? "Update Event" : "Save Event"}
            </button>
            <button className="view-details" onClick={handleClose}>
              Cancel Event
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EventForm;
