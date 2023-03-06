import { all, fork } from "@redux-saga/core/effects";

import userSaga from "./user";
import postSaga from "./post";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
