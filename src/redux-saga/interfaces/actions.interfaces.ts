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

    LOGOUT = "LOGOUT",

    GET_DRAWING = "GET_DRAWING",
    GET_DRAWING_SUCCESS = "GET_DRAWING_SUCCESS",
    GET_DRAWING_FAILED = "GET_DRAWING_FAILED",

    GET_POSTS = "GET_POSTS",
    GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
    GET_POSTS_FAILED = "GET_POSTS_FAILED",

    CHANGE_POST_LIKE = "CHANGE_POST_LIKE",
    CHANGE_POST_LIKE_SUCCESS = "CHANGE_POST_LIKE_SUCCESS",
    CHANGE_POST_LIKE_FAILED = "CHANGE_POST_LIKE_FAILED",

    CHANGE_PAGE = "CHANGE_PAGE",
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

export interface GetDrawing {
    type: actionTypes.GET_DRAWING
    payload: payloads.GetDrawingPayload
}

export interface GetDrawingSuccess {
    type: actionTypes.GET_DRAWING_SUCCESS,
    payload: payloads.GetDrawingSuccessPayload
}

export interface GetDrawingFailed {
    type: actionTypes.GET_DRAWING_FAILED,
    error: data.Error
}

export interface GetPosts {
    type: actionTypes.GET_POSTS,
    payload: payloads.GetPostsPayload,
}

export interface GetPostsSuccess {
    type: actionTypes.GET_POSTS_SUCCESS,
    payload: payloads.GetPostsSuccessPayload,

}

export interface GetPostsFailed {
    type: actionTypes.GET_POSTS_FAILED,
    error: data.Error
}

export interface ChangePostLike {
    type: actionTypes.CHANGE_POST_LIKE,
    payload: payloads.ChangePostLikePayload,
}

export interface ChangePage {
    type: actionTypes.CHANGE_PAGE,
    payload: payloads.ChangePagePayload
}

export type Action = SetTheme | ToggleTheme | GetWordOfDay | GetWordOfDaySuccess | GetWordOfDayFailed
    | SaveDraftInStorage | PostDrawing | PostDrawingSuccess | PostDrawingFailed | Login
    | LoginSuccess | LoginFailed | SignUp
    | SignUpSuccess | SignUpFailed | Logout | GetDrawing | GetDrawingSuccess | GetDrawingFailed
    | GetPosts | GetPostsSuccess | GetPostsFailed | ChangePage