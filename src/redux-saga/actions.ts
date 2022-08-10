import { actionTypes, GetWordOfDay, GetWordOfDayFailed, GetWordOfDaySuccess, PostDrawing, PostDrawingFailed, PostDrawingSuccess, SaveDraftInStorage, SetTheme, ToggleTheme } from "./interfaces/actions.interfaces"; 
import { ThemePayload, WordPayload } from "./interfaces/payloads.interfaces";
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

export const getWordOfDaySuccess = (payload: WordPayload): GetWordOfDaySuccess => ({
    type: actionTypes.GET_WORD_OF_DAY_SUCCESS,
    payload: payload
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

export const postDrawing = (drawing: string, date: Date, userId: number, wordId: number) : PostDrawing => ({
    type: actionTypes.POST_DRAWING,
    payload: {
        drawing,
        date,
        userId,
        wordId
    }
})

export const postDrawingSuccess = () : PostDrawingSuccess => ({
    type: actionTypes.POST_DRAWING_SUCCESS,
})

export const postDrawingFailed = () : PostDrawingFailed => ({
   type: actionTypes.POST_DRAWING_FAILED, 
})
