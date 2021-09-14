import { LOGIN_SUCCESS } from "../actions/types";

const initialState = {
  profile: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    default:
      return state;
  }
}
