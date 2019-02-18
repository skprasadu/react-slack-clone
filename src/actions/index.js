import * as actionsTypes from "./types";

/* user actions */
export const setUser = user => ({
  type: actionsTypes.SET_USER,
  payload: {
    currentUser: user
  }
});

export const clearUser = () => ({
  type: actionsTypes.CLEAR_USER
});

/* channel actions */
export const setCurrentChannel = channel => ({
  type: actionsTypes.SET_CHANNEL_ACTION,
  payload: {
    currentChannel: channel
  }
});

export const setPrivateChannel = isPrivateChannel => {
  return {
    type: actionsTypes.SET_PRIVATE_CHANNEL,
    payload: {
      isPrivateChannel
    }
  }
}