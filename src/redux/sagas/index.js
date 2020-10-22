import { all } from 'redux-saga/effects';
import AuthSaga from './auth';
import AdminSaga from './admin';

/**
 * @description combine sagas.
 */
export default function* Sagas() {
  yield all([
    AuthSaga(),
    AdminSaga()
  ]);
}
