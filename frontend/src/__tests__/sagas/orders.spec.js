import { runSaga } from "redux-saga";
import mockAdapter from "axios-mock-adapter";
import api from "../../services/api";

import { getOrdersList } from "../../store/sagas/orders";
import { Creators as OrdersListAction } from "../../store/ducks/orders";

const apiMock = new mockAdapter(api);

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    apiMock.onGet("/orders").reply(200, ["Order 1", "Order 2"]);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getOrdersList
    ).toPromise();

    expect(dispatched).toContainEqual(
      OrdersListAction.getOrdersListSuccess(["Order 1", "Order 2"])
    );
  });
});
