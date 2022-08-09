import { THEME } from "../../config/constants"

export interface ThemeState {
    mode: THEME
}

export interface WordState {
    wordOfTheDay: string
}

export interface RootState {
    theme: ThemeState
}