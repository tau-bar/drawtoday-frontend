import { all, call, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { getWordOfDay, login, postUserDrawing, signUpRequest } from '../config/api';
import { getWordOfDayFailed, getWordOfDaySuccess, loginFailed, loginSuccess, postDrawingFailed, postDrawingSuccess, signUpFailed, signUpSuccess } from './actions';
import { actionTypes, Login, PostDrawing, SignUp } from './interfaces/actions.interfaces';

function* getWordOfDaySaga() {
    const { data, status } = yield call(getWordOfDay)
    const wordData = data[0]
    yield put(status === 200 ? getWordOfDaySuccess(wordData) : getWordOfDayFailed(data))
}

function* signUpSaga() {
    const user: SignUp = yield take(actionTypes.SIGN_UP)
    const { username, password } = user.payload;
    const { data, status } = yield call(() => signUpRequest({ username: username, password: password }))
    yield put(status === 200 ? signUpSuccess(data.token, data.userId) : signUpFailed({ message: data.message }));
}

function* loginUserSaga() {
    const user: Login = yield take(actionTypes.LOGIN)
    const { username, password } = user.payload;
    const { data, status } = yield call(() => login({ username: username, password: password }))
    yield put(status === 200 ? loginSuccess(data.token, data.userId) : loginFailed({ message: data.message }));
}

function* postDrawingSaga() {
    const post: PostDrawing = yield take(actionTypes.POST_DRAWING);
    const payload = post.payload
    const { status } = yield call(() => postUserDrawing({ drawing: payload.drawing, wordId: payload.wordId, userId: 1, date: payload.date }));
    yield put(status === 200 ? postDrawingSuccess() : postDrawingFailed())
}

export function* rootSaga(): Generator {
    yield all([
        takeEvery(actionTypes.SIGN_UP, signUpSaga),
        takeEvery(actionTypes.LOGIN, loginUserSaga),
        takeEvery(actionTypes.POST_DRAWING, postDrawingSaga),
        takeLatest(actionTypes.GET_WORD_OF_DAY, getWordOfDaySaga)
    ])
}
