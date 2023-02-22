import { ADD_BOOKING, DELETE_BOOKING } from "./actionType";

const initialState = {
  bookings: [],
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case DELETE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
