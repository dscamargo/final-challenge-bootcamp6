import Immutable from "seamless-immutable";

export const Types = {
  GET_REQUEST: "DELIVERY/REQUEST",
  GET_SUCCESS: "DELIVERY/SUCCESS",
  GET_FAILURE: "DELIVERY/FAILURE"
};

const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  message: null,
  id: null
});

export default function getDelivery(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, id: action.payload.id };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, error: false };
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
  getDeliveryRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),
  getDeliverySuccess: () => ({
    type: Types.GET_SUCCESS
  }),
  getDeliveryFailure: message => ({
    type: Types.GET_FAILURE,
    payload: { message }
  })
};
