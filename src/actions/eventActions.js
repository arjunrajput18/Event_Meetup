
export const INITIAL_EVENT = "INITIAL_EVENT";
export const ADD_EVENT = "ADD_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

export const initalizeEvent = (event) => {
  return {
    type: INITIAL_EVENT,
    payload: event,
  };
};

export const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    payload: event,
  };
};
export const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
};

export const editEvent = (event) => {
  return {
    type: EDIT_EVENT,
    payload: event,
  };
};

export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
};
