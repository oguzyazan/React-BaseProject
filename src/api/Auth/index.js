import { APIHelper } from "../../util/helpers";

export const callLoginAPI = (body) => {
  const options = APIHelper.createOptions("POST", body);
  const response = APIHelper.callAPI("/Auth/Login", options);
  return response;
};
