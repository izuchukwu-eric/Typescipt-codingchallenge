import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/types";

const initialState = {
  profile: null,
  loading: true,
  isAuthenticated: null,
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
        isAuthenticated: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    default:
      return state;
  }
}
