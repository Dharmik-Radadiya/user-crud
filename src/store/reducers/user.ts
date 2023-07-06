import { createSlice } from "@reduxjs/toolkit";
import userData from "../../data/userData";

interface UserState {
  user: typeof userData;
}

const initialState: UserState = {
  user: userData,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /**
     * Set the user in the state by adding the payload to the user array.
     *
     * @param {any} state - the current state object
     * @param {any} action - the action object containing the payload
     * @return {object} the new state object with the updated user array
     */
    setUser: (state, action) => {
      return {
        user: [...state.user, action.payload],
      };
    },

    /**
     * Sets the filter for the user array based on the provided action payload.
     *
     * @param {object} state - The current state object.
     * @param {object} action - The action object containing the payload.
     * @return {object} The updated state object with the filtered user array.
     */
    setFilter: (state, action) => {
      const filterUser = state.user.filter((item) => {
        item[action.payload.type].includes(action.payload.value);
      });
      return {
        user: filterUser,
      };
    },
  },
});

export const { reducer, actions } = userSlice;
export const { setUser, setFilter } = actions;
export default reducer;
