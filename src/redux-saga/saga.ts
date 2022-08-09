import { ConstructionOutlined, RssFeed } from "@mui/icons-material";
import { AxiosResponse, AxiosResponseHeaders } from "axios";
import { ServerResponse } from "http";
import { all, call, fork, put, takeLatest } from "redux-saga/effects"
import { getWordOfDay } from "../config/api";
import { getWordOfDayFailed, getWordOfDaySuccess } from "./actions";
import { actionTypes, GetWordOfDay } from "./interfaces/actions.interfaces";


function* getWordOfDaySaga() {
    const { data, status } = yield call(getWordOfDay);
    yield put(status === 200 ? getWordOfDaySuccess(data[0].word) : getWordOfDayFailed(data))
}

export function* rootSaga(): Generator {
    yield takeLatest(actionTypes.GET_WORD_OF_DAY, getWordOfDaySaga);
}