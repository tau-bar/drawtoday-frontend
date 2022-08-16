import { all, call, put, takeEvery } from 'redux-saga/effects';
import { changePostLikeRequest, getDrawing, getPostsData, getWordOfDay, login, postUserDrawing, signUpRequest } from '../config/api';
import { getDrawingFailed, getDrawingSuccess, getPostsFailed, getPostsSuccess, getWordOfDayFailed, getWordOfDaySuccess, loginFailed, loginSuccess, postDrawingFailed, postDrawingSuccess, reloadPostsFailed, reloadPostsSuccess, signUpFailed, signUpSuccess } from './actions';
import { actionTypes, ChangePostLike, GetDrawing, GetPosts, GetWordOfDay, Login, PostDrawing, ReloadPosts, SignUp } from './interfaces/actions.interfaces';

function* getWordOfDaySaga(action: GetWordOfDay) {
    const { data, status } = yield call(() => getWordOfDay({ userId: action.payload.userId }))
    const wordData = data.word[0]
    yield put(status === 200 ? getWordOfDaySuccess({ word: wordData, postedToday: data.postedToday }) : getWordOfDayFailed(data))
}

function* signUpSaga(action: SignUp) {
    const { username, password } = action.payload;
    const { data, status } = yield call(() => signUpRequest({ username: username, password: password }))
    yield put(status === 200 ? signUpSuccess(data.token, data.userId) : signUpFailed({ message: data.message }));
}

function* loginUserSaga(action: Login) {
    const { username, password } = action.payload;
    const { data, status } = yield call(() => login({ username: username, password: password }))
    yield put(status === 200 ? loginSuccess(data.token, data.userId) : loginFailed({ message: data.message }));
}

function* postDrawingSaga(action: PostDrawing) {
    const payload = action.payload
    const { status } = yield call(() => postUserDrawing({ drawing: payload.drawing, wordId: payload.wordId, userId: payload.userId, date: payload.date, token: payload.authentication.token }));
    yield put(status === 200 ? postDrawingSuccess() : postDrawingFailed())
}

function* getDrawingOfWord(action: GetDrawing) {
    const payload = action.payload;
    const { status, data } = yield call(() => getDrawing({ userId: payload.userId, wordId: payload.wordId }));
    yield put(status === 200 ? getDrawingSuccess(data.drawing) : getDrawingFailed(data.message))
}

function* getPosts(action: GetPosts) {
    const payload = action.payload;
    const { status, data } = yield call(() => getPostsData({ offset: payload.offset, limit: payload.limit, userId: payload.userId }));
    yield put(status === 200 ? getPostsSuccess(data.posts) : getPostsFailed(data.message));
}

function* changePostLike(action: ChangePostLike) {
    const payload = action.payload;
    const { status, data } = yield call(() => changePostLikeRequest({ drawingId: payload.drawingId, userId: payload.userId, likeValue: payload.likeValue, token: payload.authentication.token }))
}

function* reloadPosts(action: ReloadPosts) {
    const payload = action.payload;
    const { status, data } = yield call(() => getPostsData({ offset: payload.offset, limit: payload.limit, userId: payload.userId }));
    yield put(status === 200 ? reloadPostsSuccess(data.posts) : reloadPostsFailed(data.message));
}

export function* rootSaga(): Generator {
    yield all([
        takeEvery(actionTypes.SIGN_UP, signUpSaga),
        takeEvery(actionTypes.LOGIN, loginUserSaga),
        takeEvery(actionTypes.POST_DRAWING, postDrawingSaga),
        takeEvery(actionTypes.GET_WORD_OF_DAY, getWordOfDaySaga),
        takeEvery(actionTypes.GET_DRAWING, getDrawingOfWord),
        takeEvery(actionTypes.GET_POSTS, getPosts),
        takeEvery(actionTypes.CHANGE_POST_LIKE, changePostLike),
        takeEvery(actionTypes.RELOAD_POSTS, reloadPosts)
    ])
}
