import Immutable from "seamless-immutable";

export const Types = {
  GET_REQUEST: "ORDERS/REQUEST",
  GET_SUCCESS: "ORDERS/SUCCESS",
  GET_FAILURE: "ORDERS/FAILURE"
};

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  message: null
});

export default function OrderList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
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
