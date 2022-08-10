import { ConstructionOutlined, QrCodeScannerOutlined, RssFeed } from "@mui/icons-material";
import { AxiosResponse, AxiosResponseHeaders } from "axios";
import { ServerResponse } from "http";
import { all, call, fork, put, take, takeLatest } from "redux-saga/effects"
import { getWordOfDay, postUserDrawing } from "../config/api";
import { getWordOfDayFailed, getWordOfDaySuccess, postDrawingFailed, postDrawingSuccess } from "./actions";
import { actionTypes, GetWordOfDay, PostDrawing } from "./interfaces/actions.interfaces";
import { PostDrawingPayload } from "./interfaces/payloads.interfaces";


function* getWordOfDaySaga() {
    const { data, status } = yield call(getWordOfDay);
    const wordData = data[0];
    yield put(status === 200 ? getWordOfDaySuccess(wordData) : getWordOfDayFailed(data))
}

function* postDrawingSaga() {
    const post: PostDrawing = yield take(actionTypes.POST_DRAWING);
    const payload = post.payload
    const { data, status } = yield call(() => postUserDrawing({ drawing: payload.drawing, wordId: payload.wordId, userId: 1, date: payload.date }));
    yield put(status === 200 ? postDrawingSuccess() : postDrawingFailed())
}

export function* rootSaga(): Generator {
    yield takeLatest(actionTypes.POST_DRAWING, postDrawingSaga);
    yield takeLatest(actionTypes.GET_WORD_OF_DAY, getWordOfDaySaga);
    
}