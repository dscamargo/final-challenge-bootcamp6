export const Types = {
  SIGN_IN_REQUEST: "SIGN_IN/REQUEST",
  SIGN_IN_SUCCESS: "SIGN_IN/SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN/FAILURE",
  SIGN_OUT_SUCCESS: "SIGN_OUT/SUCCESS"
};

const INITIAL_STATE = {
  signedIn: !!localStorage.getItem("@Desafio:token"),
  token: localStorage.getItem("@Desafio:token"),
  loading: false,
  error: true,
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
        signedIn: true,
        token: action.payload.token,
        error: false
      };
    case Types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        signedIn: false,
        token: null,
        error: false
      };
    case Types.SIGN_IN_FAILURE:
      return {
        ...state,
        error: true,
        message: action.payload.message,
        loading: false,
        token: null
      };
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
  })
};
