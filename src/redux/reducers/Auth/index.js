import { LOGIN_REQUEST, LOGIN_RESPONSE } from "../../constants";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_RESPONSE:
      return { response: action.response, loading: false };
    default:
      return state;
  }
};
export { loginReducer };
