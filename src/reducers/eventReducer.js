import { INITIAL_EVENT,ADD_EVENT, EDIT_EVENT, DELETE_EVENT,UPDATE_EVENT } from "../actions/eventActions";


const initialState = {
  events: [],
  edit_id:null
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {

    case INITIAL_EVENT:
      return {
        ...state,
        events:[...state.events,...action.payload],
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case EDIT_EVENT:
      return {
        ...state,
        edit_id:action.payload,
        
      };
      case UPDATE_EVENT:
      return {
        ...state,
        edit_id:null,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
  
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    default:
      return state;
  }
};

export default eventReducer;
