import { fromJS } from "immutable";
import { createTransform } from "redux-persist";
import { initialState } from "reducers/user";

const persistTransform = () => {
  return createTransform(
    inbound => {
      const transformed = inbound.toJS();
      if (transformed.authentication) {
        return JSON.stringify({
          authentication: transformed.authentication,
        });
      }
    },
    outbound => {
      const outboundTransformed = JSON.parse(outbound);
      return fromJS({
        ...initialState.toJS(),
        authentication: outboundTransformed.authentication,
      });
    }
  );
};

export default persistTransform;
