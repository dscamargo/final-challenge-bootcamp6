import ordersReducer, {
  Creators as OrdersActions
} from "../../store/ducks/orders";

describe("Orders Reducer", () => {
  it("should be able to call Reducer Orders Request", () => {
    const state = ordersReducer(
      { loading: false },
      OrdersActions.getOrdersListRequest()
    );

    expect(state.loading).toBe(true);
  });
  it("should be able to call Reducer Orders Success", () => {
    const state = ordersReducer(
      { data: [], loading: true },
      OrdersActions.getOrdersListSuccess({ message: "done" })
    );

    expect(state.loading).toBe(false);
    expect(state.data).toEqual({ message: "done" });
  });

  it("should be able to call Reducer Orders Failure", () => {
    const state = ordersReducer(
      { loading: true, error: false, message: null },
      OrdersActions.getOrdersListFailure({ message: "error" })
    );

    expect(state.loading).toBe(false);
    expect(state.message).toEqual({ message: "error" });
    expect(state.error).toEqual(true);
  });
});
