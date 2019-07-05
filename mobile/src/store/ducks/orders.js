export const Types = {
  GET_REQUEST: "ORDERS/GET_REQUEST",
  GET_SUCCESS: "ORDERS/GET_SUCCESS",
  GET_FAILURE: "ORDERS/GET_FAILURE"
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  message: null
};

export default function getOrdersList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
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
  getOrdersListRequest: () => ({
    type: Types.GET_REQUEST
  }),
  getOrdersListSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  getOrdersListFailure: message => ({
    type: Types.GET_FAILURE,
    payload: { message }
  })
};
