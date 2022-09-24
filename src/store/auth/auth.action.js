import { handleLogin } from "utils";
import { guestApi } from "src/api";
import { mutators } from "./auth.redux";

const actions = {
  login: () => async (dispatch) => {
    try {
      let response = await guestApi().getWithLoading("auth");
      dispatch(mutators.login({ token: response.data.token }));
      handleLogin({ token: response.data.token });
    } catch (e) {
      console.error(e);
    }
  },
};

export default actions;
