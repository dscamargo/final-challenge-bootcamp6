export const Types = {
  OPEN: "MODAL/OPEN",
  CLOSE: "MODAL/CLOSE"
};

const INITIAL_STATE = {
  visible: false
};

export default function getOrderDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return { ...state, visible: true };

    case Types.CLOSE:
      return {
        ...state,
        visible: false
      };

    default:
      return state;
  }
}

export const Creators = {
  openModal: () => ({
    type: Types.OPEN
  }),
  closeModal: () => ({
    type: Types.CLOSE
  })
};
