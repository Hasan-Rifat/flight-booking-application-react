import { ADD_BOOKING, DELETE_BOOKING } from "./actionType";

const initialState = {
  bookings: [],
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        bookings:
          state.bookings.length < 3
            ? [...state.bookings, action.payload]
            : state.bookings,
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
