export const Types = {
  LOAD_USER_SUCESS: "LOAD_USER/SUCCESS",
  LOAD_USER_FAILURE: "LOAD_USER/FAILURE"
};

const INITIAL_STATE = {
  data: {},
  error: false,
  message: null
};

export default function searchUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_USER_SUCESS:
      return {
        ...state,
        data: action.payload.data
      };
    case Types.LOAD_USER_FAILURE:
      return {
        ...state,
        error: true,
        message: action.payload.message
      };
    default:
      return state;
  }
}

export const Creators = {
  loadUserSucess: data => ({
    type: Types.LOAD_USER_SUCESS,
    payload: { data }
  }),
  loadUserFailure: message => ({
    type: Types.LOAD_USER_FAILURE,
    payload: { message }
  })
};
