import {all} from 'redux-saga/effects';
import watchLoginRequests from './Auth';

export default function* rootSaga() {
  yield all([watchLoginRequests()]);
}