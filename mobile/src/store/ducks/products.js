export const Types = {
  GET_REQUEST: "PRODUCTS/GET_REQUEST",
  GET_SUCCESS: "PRODUCTS/GET_SUCCESS",
  CLEAR: "PRODUCTS/CLEAR"
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  message: null
};

export default function error(state = INITIAL_STATE, action) {
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

    case Types.CLEAR:
      return {
        ...state,
        data: []
      };

    default:
      return state;
  }
}

export const Creators = {
  getProductsListRequest: () => ({
    type: Types.GET_REQUEST
  }),
  getProductsListSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  clearProductsList: () => ({
    type: Types.CLEAR
  })
};
