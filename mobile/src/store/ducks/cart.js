export const Types = {
  ADD_ITEM: "CART/ADD_ITEM",
  REMOVE_ITEM: "CART/REMOVE_ITEM",
  CLEAR: "CART/CLEAR",
  SAVE_ITEMS: "CART/SAVE_ITEMS"
};

const INITIAL_STATE = {
  data: [],
  item: {}
};

export default function getOrderDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_ITEM:
      return { ...state, data: [action.payload.data, ...state.data] };

    case Types.REMOVE_ITEM:
      return {
        ...state,
        data: state.data.filter(item => {
          return action.payload.id !== item.id;
        })
      };

    case Types.CLEAR:
      return { ...state, data: [] };

    case Types.SAVE_ITEMS:
      return { ...state, item: action.payload.item };

    default:
      return state;
  }
}

export const Creators = {
  addItemCart: data => ({
    type: Types.ADD_ITEM,
    payload: { data }
  }),
  removeItemCart: id => ({
    type: Types.REMOVE_ITEM,
    payload: { id }
  }),
  clearCart: () => ({
    type: Types.CLEAR
  }),
  saveItems: item => ({
    type: Types.SAVE_ITEMS,
    payload: { item }
  })
};
