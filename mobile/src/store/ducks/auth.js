export const Types = {
  SIGN_IN_REQUEST: "SIGN_IN/REQUEST",
  SIGN_IN_SUCCESS: "SIGN_IN/SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN/FAILURE",
  SIGN_OUT_SUCCESS: "SIGN_OUT/SUCCESS",
  AUTH_CHECK_SUCCES: "AUTH/CHECK"
};

const INITIAL_STATE = {
  authChecked: false,
  signedIn: false,
  token: null,
  message: null
};

export default function authentication(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        email: action.payload.email,
        password: action.payload.password
      };

    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        signedIn: true,
        token: action.payload.token,
        message: null
      };

    case Types.SIGN_IN_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.payload.message
      };

    case Types.SIGN_OUT_SUCCESS:
      return { ...state, signedIn: false, token: null };
    case Types.AUTH_CHECK_SUCCES:
      return { ...state, authChecked: true };
    default:
      return state;
  }
}

export const Creators = {
  signInRequest: (email, password) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { email, password }
  }),
  signInSuccess: token => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { token }
  }),
  signInFailure: message => ({
    type: Types.SIGN_IN_FAILURE,
    payload: { message }
  }),
  logout: () => ({
    type: Types.SIGN_OUT_SUCCESS
  }),
  initCheckSuccess: () => ({
    type: Types.AUTH_CHECK_SUCCES
  })
};
