export const Types = {
  GET_REQUEST: "SIGNUP/REQUEST",
  GET_SUCCESS: "SIGNUP/SUCCESS",
  GET_FAILURE: "SIGNUP/FAILURE"
};

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false,
  message: null
};

export default function saveOrder(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        data: action.payload.data
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: action.payload.message
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.payload.message
      };

    default:
      return state;
  }
}

export const Creators = {
  createAccountRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data }
  }),
  createAccountSuccess: message => ({
    type: Types.GET_SUCCESS,
    payload: { message }
  }),
  createAccountFailure: message => ({
    type: Types.GET_FAILURE,
    payload: { message }
  })
};
