import { actionTypes, GetWordOfDay, GetWordOfDayFailed, GetWordOfDaySuccess, SaveDraftInStorage, SetTheme, ToggleTheme } from "./interfaces/actions.interfaces"; 
import { ThemePayload } from "./interfaces/payloads.interfaces";
import * as data from "./interfaces/data.interfaces"
import { DEFAULT_CANVAS } from "../config/constants";

export const setTheme = (payload: ThemePayload): SetTheme => ({
    type: actionTypes.SET_THEME,
    payload
})

export const toggleTheme = (): ToggleTheme => ({
    type: actionTypes.TOGGLE_THEME
})

export const getWordOfDay = (): GetWordOfDay => ({
    type: actionTypes.GET_WORD_OF_DAY
})

export const getWordOfDaySuccess = (word: string): GetWordOfDaySuccess => ({
    type: actionTypes.GET_WORD_OF_DAY_SUCCESS,
    payload: word
})

export const getWordOfDayFailed = (error: data.Error): GetWordOfDayFailed => ({
    type: actionTypes.GET_WORD_OF_DAY_FAILED,
    error: error 
})

export const saveDrawingAsDraft = (drawing: string | undefined, date: Date) : SaveDraftInStorage => ({
    type: actionTypes.SAVE_DRAFT_IN_STORAGE,
    payload: {
        drawing: drawing ?? DEFAULT_CANVAS,
        date: date
    }
})
