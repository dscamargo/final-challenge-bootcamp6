export const Types = {
  GET_REQUEST: "SIZES/GET_REQUEST",
  GET_SUCCESS: "SIZES/GET_SUCCESS",
  CLEAR: "SIZES/CLEAR"
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  type: null,
  ingredients: null
};

export default function getSizesList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
        id: action.payload.id,
        ingredients: action.payload.ingredients
      };

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
  getSizesListRequest: (id, ingredients) => ({
    type: Types.GET_REQUEST,
    payload: { id, ingredients }
  }),
  getSizesListSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  clearSizesList: () => ({
    type: Types.CLEAR
  })
};
