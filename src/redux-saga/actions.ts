import { DEFAULT_CANVAS } from "../config/constants";
import {
    actionTypes,
    GetWordOfDay,
    GetWordOfDayFailed,
    GetWordOfDaySuccess,
    Login,
    LoginFailed,
    LoginSuccess,
    Logout,
    PostDrawing,
    PostDrawingFailed,
    PostDrawingSuccess,
    SaveDraftInStorage,
    SetTheme,
    SignUp,
    SignUpFailed,
    SignUpSuccess,
    ToggleTheme
} from "./interfaces/actions.interfaces";
import * as data from "./interfaces/data.interfaces";
import { ThemePayload, WordPayload } from "./interfaces/payloads.interfaces";

export const setTheme = (payload: ThemePayload): SetTheme => ({
    type: actionTypes.SET_THEME,
    payload,
});

export const toggleTheme = (): ToggleTheme => ({
    type: actionTypes.TOGGLE_THEME,
});

export const getWordOfDay = (userId: number): GetWordOfDay => ({
    type: actionTypes.GET_WORD_OF_DAY,
    payload: {
        userId
    }
});

export const getWordOfDaySuccess = (
    payload: WordPayload
): GetWordOfDaySuccess => ({
    type: actionTypes.GET_WORD_OF_DAY_SUCCESS,
    payload: payload,
});

export const getWordOfDayFailed = (error: data.Error): GetWordOfDayFailed => ({
    type: actionTypes.GET_WORD_OF_DAY_FAILED,
    error: error,
});

export const saveDrawingAsDraft = (
    drawing: string | undefined,
    date: Date
): SaveDraftInStorage => ({
    type: actionTypes.SAVE_DRAFT_IN_STORAGE,
    payload: {
        drawing: drawing ?? DEFAULT_CANVAS,
        date: date,
    },
});

export const postDrawing = (
    drawing: string,
    date: Date,
    userId: number,
    wordId: number,
    token: string
): PostDrawing => ({
    type: actionTypes.POST_DRAWING,
    payload: {
        drawing,
        date,
        userId,
        wordId,
        authentication: {
            token
        }
    },
});

export const postDrawingSuccess = (): PostDrawingSuccess => ({
    type: actionTypes.POST_DRAWING_SUCCESS,
});

export const postDrawingFailed = (): PostDrawingFailed => ({
    type: actionTypes.POST_DRAWING_FAILED,
});

export const login = (username: string, password: string): Login => ({
    type: actionTypes.LOGIN,
    payload: {
        username,
        password
    }
})

export const loginSuccess = (token: string, userId: number): LoginSuccess => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
        token,
        userId
    }
})

export const loginFailed = (error: data.Error): LoginFailed => ({
    type: actionTypes.LOGIN_FAILED,
    error: error
})

export const signUp = (username: string, password: string): SignUp => ({
    type: actionTypes.SIGN_UP,
    payload: {
        username, password
    }
})

export const signUpSuccess = (token: string, userId: number): SignUpSuccess => ({
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: {
        token,
        userId
    }
})

export const signUpFailed = (error: data.Error): SignUpFailed => ({
    type: actionTypes.SIGN_UP_FAILED,
    error: error
})

export const logout = (): Logout => ({
    type: actionTypes.LOGOUT
})
