export const Types = {
  GET_REQUEST: "ORDER_DETAILS/GET_REQUEST",
  GET_SUCCESS: "ORDER_DETAILS/GET_SUCCESS",
  GET_FAILURE: "ORDER_DETAILS/GET_FAILURE"
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  id: null,
  message: null
};

export default function getOrderDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, id: action.payload.id };

    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        id: null,
        message: null
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
  getOrderDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),
  getOrderDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  getOrderDetailsFailure: message => ({
    type: Types.GET_FAILURE,
    payload: { message }
  })
};
