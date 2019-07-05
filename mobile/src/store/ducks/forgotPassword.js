import Immutable from "seamless-immutable";

export const Types = {
  GET_REQUEST: "FORGOT_PASSWORD/REQUEST",
  GET_SUCCESS: "FORGOT_PASSWORD/SUCCESS",
  GET_FAILURE: "FORGOT_PASSWORD/FAILURE"
};

const INITIAL_STATE = Immutable({
  data: {},
  loading: false,
  message: null,
  error: false
});

export default function forgotPassword(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, data: action.payload.data };
    case Types.GET_SUCCESS:
      return { ...state, loading: false };
    case Types.GET_FAILURE:
      return { ...state, error: true, message: action.payload.message };
    default:
      return state;
  }
}

export const Creators = {
  getForgotPasswordRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data }
  }),
  getForgotPasswordSuccess: () => ({
    type: Types.GET_SUCCESS
  }),
  getForgotPasswordFailure: message => ({
    type: Types.GET_FAILURE,
    payload: { message }
  })
};
