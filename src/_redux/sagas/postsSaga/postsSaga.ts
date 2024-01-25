import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../../models/IPost";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
  addMyFavPost
} from "../../action/postsActions/postsActions";
import { postTypes } from "../../Actiontypes/postsTypes";

const getPosts = () =>
  axios.get<IPost[]>("https://jsonplaceholder.typicode.com/todos");

function* fetchPostsSaga() {
  try {
    const response: [] = yield call(getPosts);
    yield put(
      fetchPostsSuccess({
        posts: response
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e.message
      })
    );
  }
}


function* addMyFavPostsSaga(value: any) {
  yield put((
    payload: any
  ): any => ({
    payload
  })
  );
}

function* removeMyFavPostsSaga(value: any) {
  yield put((
    payload: any
  ): any => ({
    payload
  })
  );
}

function* watchFetchPost() {
  yield takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga);
}

function* watchAddFavPost() {
  yield takeLatest(postTypes.ADD_MY_FAV_POST, addMyFavPostsSaga);
}
function* watchRemoveFavPost() {
  yield takeLatest(postTypes.REMOVE_MY_FAV_POST, removeMyFavPostsSaga);
}

function* postsSaga() {
  yield all([
    watchFetchPost(),
    watchAddFavPost(),
    watchRemoveFavPost()
  ]);
}

export default postsSaga;
