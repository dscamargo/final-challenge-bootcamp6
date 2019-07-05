export const Types = {
  SAVE_REQUEST: "ORDER/SAVE_REQUEST",
  SAVE_SUCCESS: "ORDER/SAVE_SUCCESS",
  SAVE_FAILURE: "ORDER/SAVE_FAILURE"
};

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false,
  message: null
};

export default function saveOrder(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SAVE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        data: action.payload.data
      };
    case Types.SAVE_SUCCESS:
      return { ...state, loading: false, error: false, message: null };
    case Types.SAVE_FAILURE:
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
  saveOrderRequest: data => ({
    type: Types.SAVE_REQUEST,
    payload: { data }
  }),
  saveOrderSuccess: () => ({
    type: Types.SAVE_SUCCESS
  }),
  saveOrderFailure: message => ({
    type: Types.SAVE_FAILURE,
    payload: { message }
  })
};
