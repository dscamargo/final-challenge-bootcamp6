export const Types = {
  GET_REQUEST: "TYPES/GET_REQUEST",
  GET_SUCCESS: "TYPES/GET_SUCCESS",
  CLEAR: "TYPES/CLEAR"
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  id: null
};

export default function types(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
        id: action.payload.id
      };

    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
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
  getTypesListRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),
  getTypesListSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  clearTypesList: () => ({
    type: Types.CLEAR
  })
};
