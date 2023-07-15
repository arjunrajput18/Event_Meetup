import { NavLink, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./SingleCard.css";
import { useDispatch } from "react-redux";
import { deleteEvent, editEvent } from "../../actions/eventActions";
export const SingleCard = ({ data, setShowEventForm }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    setShowEventForm(true);
    dispatch(editEvent(data.id));
  };

  const handleDelete = () => {
    dispatch(deleteEvent(data.id));
  };

  const startDate = new Date(data.startDate);

  const formattedStartTime = startDate.toDateString();
  console.log({ data });
  return (
    <div className="card">
      <div className="edit-delete-card">
        <button className="icons-edit" onClick={handleEdit}>
          <FiEdit />
        </button>
        <button className="icons-delete" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </div>
      <img src={data.eventThumbnail} alt="img" className="card-img" />
      <div className="titleName">{data.name}</div>
      <p className="eventType">{data.type} event</p>
      <p className="eventFormate">{formattedStartTime} </p>
      <NavLink to={`/meetingDetails/${data.id}`} className="view-details">
        View Details
      </NavLink>
    </div>
  );
};
