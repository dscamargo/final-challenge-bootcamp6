import { runSaga } from "redux-saga";
import mockAdapter from "axios-mock-adapter";
import api from "../../services/api";

import { getDelivery } from "../../store/sagas/delivery";
import { Creators as DeliveryActions } from "../../store/ducks/delivery";

const apiMock = new mockAdapter(api);

describe("Delivery Saga", () => {
  it("should be able to change delivery status", async () => {
    const dispatched = [];

    const data = { id: 1 };

    apiMock.onPut(`/orders/${data.id}`).reply(200);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getDelivery,
      { payload: { id: data.id } }
    ).toPromise();

    expect(dispatched).toContainEqual(DeliveryActions.getDeliverySuccess());
  });
});
