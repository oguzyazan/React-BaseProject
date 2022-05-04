import { takeEvery, call, put, select } from "redux-saga/effects";
import { callLoginAPI } from "../../../api";
import { loginResponse } from "../../actions";
import { LOGIN_REQUEST } from "../../constants";

const getLoginState = (state) => state.loginReducer;

function* login() {
  const state = yield select(getLoginState);
  const response = yield call(callLoginAPI, state.requestBody);
  yield put(loginResponse(response));
}

export default function* watchLoginRequests(){
    yield takeEvery(LOGIN_REQUEST, login)
}
