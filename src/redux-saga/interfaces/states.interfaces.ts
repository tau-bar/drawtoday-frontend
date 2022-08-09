import { THEME } from "../../config/constants"

export interface ThemeState {
    mode: THEME
}

export interface RootState {
    theme: ThemeState
}