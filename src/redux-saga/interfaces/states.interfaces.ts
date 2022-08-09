import { THEME } from "../../config/constants"

export interface ThemeState {
    mode: THEME
}

export interface WordState {
    wordOfTheDay: string
}

export interface CanvasState {
    savedDraft: string
    dateSaved: Date
}

export interface RootState {
    theme: ThemeState
}