import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./MeetingDetails.css"

export const MeetingDetails = () => {
  const { id } = useParams();
  const events = useSelector((state) => state.events);
  console.log({})

  const eventDetails = events?.find((data) => data?.id === id);
  console.log({eventDetails})
  const navigate = useNavigate();
  const startDate = new Date(eventDetails?.startDate);
  const formattedStartDate = startDate?.toLocaleDateString();
  const endDate = new Date(eventDetails?.endDate);
  const formattedEndDate = endDate?.toLocaleDateString();
  return (
    <div className="mainEvent-Details">
      <button onClick={() => navigate("/")} className="btnToHome">Back to Home</button>
      <div className="event-details">
        <h1>{eventDetails?.name}</h1>
        <div className="event-info">
          <div className="thumbnail">
            <img src={eventDetails?.eventThumbnail} alt="Event Thumbnail" />
          </div>
          <div className="description">
            <p>
              <strong>Type:</strong> {eventDetails?.type}
            </p>
            <p>
              <strong>Start Date:</strong> {formattedStartDate}
            </p>
            <p>
              <strong>End Date:</strong> {formattedEndDate}
            </p>
            <p>
              <strong>Description:</strong> {eventDetails?.description}
            </p>
            <p>
              <strong>Handled By:</strong> {eventDetails?.handledBy}
            </p>
            <p>
              <strong>Organization:</strong> {eventDetails?.organization}
            </p>
            <p>
              <strong>Sub Event Count:</strong> {eventDetails?.subEventCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
