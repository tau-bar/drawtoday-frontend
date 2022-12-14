import { DEFAULT_CANVAS } from "../config/constants";
import {
    actionTypes,
    ChangePage,
    ChangePostLike,
    ClearPosts,
    GetDrawing,
    GetDrawingFailed,
    GetDrawingSuccess,
    GetPosts,
    GetPostsFailed,
    GetPostsSuccess,
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
    ReloadPosts,
    ReloadPostsFailed,
    ReloadPostsSuccess,
    SaveDraftInStorage,
    SetTheme,
    SignUp,
    SignUpFailed,
    SignUpSuccess,
    ToggleTheme
} from "./interfaces/actions.interfaces";
import * as data from "./interfaces/data.interfaces";
import { Post } from "./interfaces/data.interfaces";
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

export const getDrawing = (userId: number, wordId: number): GetDrawing => ({
    type: actionTypes.GET_DRAWING,
    payload: {
        wordId,
        userId,
    }
})

export const getDrawingSuccess = (drawing: string): GetDrawingSuccess => ({
    type: actionTypes.GET_DRAWING_SUCCESS,
    payload: {
        drawing
    }
});

export const getDrawingFailed = (error: data.Error): GetDrawingFailed => ({
    type: actionTypes.GET_DRAWING_FAILED,
    error: error
})

export const getPosts = (limit: number, offset: number, userId: number): GetPosts => ({
    type: actionTypes.GET_POSTS,
    payload: {
        userId,
        limit,
        offset
    }
})

export const getPostsSuccess = (posts: Post[]): GetPostsSuccess => ({
    type: actionTypes.GET_POSTS_SUCCESS,
    payload: {
        posts
    }
})

export const getPostsFailed = (error: data.Error): GetPostsFailed => ({
    type: actionTypes.GET_POSTS_FAILED,
    error: error
})

export const changePostLike = (likeValue: boolean, drawingId: number, userId: number, token: string): ChangePostLike => ({
    type: actionTypes.CHANGE_POST_LIKE,
    payload: {
        likeValue: likeValue,
        drawingId: drawingId,
        userId: userId,
        authentication: {
            token
        }
    }
})

export const changePage = (newPageNumber: number): ChangePage => ({
    type: actionTypes.CHANGE_PAGE,
    payload: {
        newPageNumber: newPageNumber,
    }
})

export const reloadPosts = (limit: number, userId: number): ReloadPosts => ({
    type: actionTypes.RELOAD_POSTS,
    payload: {
        limit,
        offset: 0,
        userId,
    }
})

export const reloadPostsSuccess = (posts: Post[]): ReloadPostsSuccess => ({
    type: actionTypes.RELOAD_POSTS_SUCCESS,
    payload: {
        posts
    }
})

export const reloadPostsFailed = (error: data.Error): ReloadPostsFailed => ({
    type: actionTypes.RELOAD_POSTS_FAILED,
    error: error
})

export const clearPosts = (): ClearPosts => ({
    type: actionTypes.CLEAR_POSTS,
})


