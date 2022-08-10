import { THEME } from "../../config/constants"

export interface ThemeState {
    mode: THEME
}

export interface WordState {
    wordOfTheDay: string
    id: number
    postedToday: boolean
}

export interface CanvasState {
    savedDraft: string
    dateSaved: Date
}

export interface RootState {
    theme: ThemeState,
    canvas: CanvasState,
    words: WordState,
    user: UserState,
}

export interface UserState {
    userId: number,
    token: string,
    isLoginLoading: boolean,
    loginError: string,
}