import * as data from "./data.interfaces"
import * as payloads from "./payloads.interfaces"

export enum actionTypes {
    SET_THEME = "SET_THEME",
    TOGGLE_THEME = "TOGGLE_THEME",

    GET_WORD_OF_DAY = "GET_WORD_OF_DAY",
    GET_WORD_OF_DAY_SUCCESS = "GET_WORD_OF_DAY_SUCCESS",
    GET_WORD_OF_DAY_FAILED = "GET_WORD_OF_DAY_FAILED",

    SAVE_DRAFT_IN_STORAGE = "SAVE_DRAFT_IN_STORAGE",

    POST_DRAWING = "POST_DRAWING",
    POST_DRAWING_SUCCESS = "POST_DRAWING_SUCCESS",
    POST_DRAWING_FAILED = "POST_DRAWING_FAILED",

    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCESS",
    LOGIN_FAILED = "LOGIN_FAILED",

    SIGN_UP = "SIGN_UP",
    SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
    SIGN_UP_FAILED = "SIGN_UP_FAILED",

    LOGOUT = "LOGOUT"
}

export interface SetTheme {
    type: actionTypes.SET_THEME
    payload: payloads.ThemePayload
}

export interface ToggleTheme {
    type: actionTypes.TOGGLE_THEME
}

export interface GetWordOfDay {
    type: actionTypes.GET_WORD_OF_DAY
    payload: payloads.GetWordOfDayPayload
}

export interface GetWordOfDaySuccess {
    type: actionTypes.GET_WORD_OF_DAY_SUCCESS
    payload: payloads.WordPayload
}

export interface GetWordOfDayFailed {
    type: actionTypes.GET_WORD_OF_DAY_FAILED
    error: data.Error
}

export interface SaveDraftInStorage {
    type: actionTypes.SAVE_DRAFT_IN_STORAGE,
    payload: payloads.DraftPayload,
}

export interface PostDrawing {
    type: actionTypes.POST_DRAWING,
    payload: payloads.PostDrawingPayload,
}

export interface PostDrawingSuccess {
    type: actionTypes.POST_DRAWING_SUCCESS
}

export interface PostDrawingFailed {
    type: actionTypes.POST_DRAWING_FAILED
}

export interface Login {
    type: actionTypes.LOGIN,
    payload: payloads.LoginPayload,
}

export interface LoginSuccess {
    type: actionTypes.LOGIN_SUCCESS,
    payload: payloads.LoginSuccessPayload,
}

export interface LoginFailed {
    type: actionTypes.LOGIN_FAILED,
    error: data.Error,
}

export interface SignUp {
    type: actionTypes.SIGN_UP,
    payload: payloads.SignUpPayload
}

export interface SignUpSuccess {
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: payloads.SignUpSuccessPayload
}

export interface SignUpFailed {
    type: actionTypes.SIGN_UP_FAILED,
    error: data.Error
}

export interface Logout {
    type: actionTypes.LOGOUT
}

export type Action = SetTheme | ToggleTheme | GetWordOfDay | GetWordOfDaySuccess | GetWordOfDayFailed
    | SaveDraftInStorage | PostDrawing | PostDrawingSuccess | PostDrawingFailed | Login
    | LoginSuccess | LoginFailed | SignUp
    | SignUpSuccess | SignUpFailed | Logout