import { LOGIN_REQUEST, LOGIN_RESPONSE } from "../../constants/index";

export const loginRequest = (requestBody, onSuccess, onFailure, showMessageDialog) => ({
  type: LOGIN_REQUEST,
  requestBody,
  onSuccess, //?
  onFailure, //?
  showMessageDialog
});

export const loginResponse = (response) => ({
  type: LOGIN_RESPONSE,
  response,
});
