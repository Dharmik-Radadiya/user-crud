import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InputValuePayload = {
  name: string;
  value: string;
};

interface ValidateState {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  status: string;
  error: {
    firstname: {
      status: boolean;
      message: string;
    };
    lastname: {
      status: boolean;
      message: string;
    };
    email: {
      status: boolean;
      message: string;
    };
    phone: {
      status: boolean;
      message: string;
    };
    status: {
      status: boolean;
      message: string;
    };
  };
}

const initialState: ValidateState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  status: "",
  error: {
    firstname: {
      status: true,
      message: "",
    },
    lastname: { status: true, message: "" },
    email: { status: true, message: "" },
    phone: { status: true, message: "" },
    status: { status: true, message: "" },
  },
};

export const validateSlice = createSlice({
  name: "validate",
  initialState,
  reducers: {
    /**
     * Sets the value of a specific input in the validate state.
     *
     * @param {ValidateState} state - The validate state object.
     * @param {PayloadAction<InputValuePayload>} action - The action object containing the input name and value.
     */
    setInputValue: (
      state: ValidateState,
      action: PayloadAction<InputValuePayload>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    /**
     * Sets the error status in the ValidateState object based on the given action payload.
     *
     * @param {ValidateState} state - The current state of the ValidateState object.
     * @param {any} action - The action object containing the payload.
     */
    setErrorStatus: (state: ValidateState, action) => {
      const {
        isFirstValid,
        isLastValid,
        isEmailValid,
        isPhoneValid,
        isStatusValid,
      } = action.payload;
      state.error = {
        firstname: isFirstValid ?? state.error.firstname,
        lastname: isLastValid ?? state.error.lastname,
        email: isEmailValid ?? state.error.email,
        phone: isPhoneValid ?? state.error.phone,
        status: isStatusValid ?? state.error.status,
      };
    },
  },
});

export const { reducer, actions } = validateSlice;
export const { setInputValue, setErrorStatus } = actions;
export default reducer;
