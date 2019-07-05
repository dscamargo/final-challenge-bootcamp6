import Immutable from "seamless-immutable";

export const Types = {
  GET_REQUEST: "NEW_PASSWORD/REQUEST",
  GET_SUCCESS: "NEW_PASSWORD/SUCCESS",
  GET_FAILURE: "NEW_PASSWORD/FAILURE"
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
      return { ...state, loading: false, error: false };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message
      };
    default:
      return state;
  }
}

export const Creators = {
  getNewPasswordRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data }
  }),
  getNewPasswordSuccess: () => ({
    type: Types.GET_SUCCESS
  }),
  getNewPasswordFailure: message => ({
    type: Types.GET_FAILURE,
    payload: { message }
  })
};
