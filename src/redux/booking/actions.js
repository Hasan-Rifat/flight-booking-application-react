import { ADD_BOOKING, DELETE_BOOKING } from "./actionType";

export const addBooking = (booking) => {
  return {
    type: ADD_BOOKING,
    payload: booking,
  };
};

export const deleteBooking = (id) => {
  return {
    type: DELETE_BOOKING,
    payload: id,
  };
};
