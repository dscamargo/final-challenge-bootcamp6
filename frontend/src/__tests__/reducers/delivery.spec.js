import deliveryReducers, {
  Creators as deliveryActions
} from "../../store/ducks/delivery";

describe("Delivery Reducer", () => {
  it("should be able to call reducer delivery request", () => {
    const state = deliveryReducers(
      { loading: false },
      deliveryActions.getDeliveryRequest(1)
    );

    expect(state.loading).toBe(true);
  });
  it("should be able to call reducer delivery success", () => {
    const state = deliveryReducers(
      { loading: true, error: false },
      deliveryActions.getDeliverySuccess()
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
  });

  it("should be able to call reducer delivery failure", () => {
    const state = deliveryReducers(
      { loading: true, error: false, message: null },
      deliveryActions.getDeliveryFailure("error")
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
    expect(state.message).toEqual("error");
  });
});
