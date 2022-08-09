import * as payloads from "./payloads.interfaces"
import * as data from "./data.interfaces"

export enum actionTypes {
    SET_THEME = "SET_THEME",
    TOGGLE_THEME = "TOGGLE_THEME",
    GET_WORD_OF_DAY = "GET_WORD_OF_DAY",
    GET_WORD_OF_DAY_SUCCESS = "GET_WORD_OF_DAY_SUCCESS",
    GET_WORD_OF_DAY_FAILED = "GET_WORD_OF_DAY_FAILED",
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
}

export interface GetWordOfDaySuccess {
    type: actionTypes.GET_WORD_OF_DAY_SUCCESS
    payload: string
}

export interface GetWordOfDayFailed {
    type: actionTypes.GET_WORD_OF_DAY_FAILED
    error: data.Error
}

export type Action = SetTheme | ToggleTheme | GetWordOfDay | GetWordOfDaySuccess | GetWordOfDayFailed