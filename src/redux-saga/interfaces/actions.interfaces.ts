import * as payloads from "./payloads.interfaces"

export enum actionTypes {
    SET_THEME = "SET_THEME",
    TOGGLE_THEME = "TOGGLE_THEME"
}

export interface SetTheme {
    type: actionTypes.SET_THEME
    payload: payloads.ThemePayload
}

export interface ToggleTheme {
    type: actionTypes.TOGGLE_THEME
}

export type Action = SetTheme | ToggleTheme