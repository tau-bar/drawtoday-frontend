import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getWordOfDay, login, postUserDrawing, signUpRequest } from '../config/api';
import { getWordOfDayFailed, getWordOfDaySuccess, loginFailed, loginSuccess, postDrawingFailed, postDrawingSuccess, signUpFailed, signUpSuccess } from './actions';
import { actionTypes, GetWordOfDay, Login, PostDrawing, SignUp } from './interfaces/actions.interfaces';

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

export function* rootSaga(): Generator {
    yield all([
        takeEvery(actionTypes.SIGN_UP, signUpSaga),
        takeEvery(actionTypes.LOGIN, loginUserSaga),
        takeEvery(actionTypes.POST_DRAWING, postDrawingSaga),
        takeEvery(actionTypes.GET_WORD_OF_DAY, getWordOfDaySaga)
    ])
}
