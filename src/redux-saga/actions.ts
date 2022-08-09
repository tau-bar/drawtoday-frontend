import { actionTypes, SetTheme, ToggleTheme } from "./interfaces/actions.interfaces"; 
import { ThemePayload } from "./interfaces/payloads.interfaces";

export const setTheme = (payload: ThemePayload): SetTheme => ({
    type: actionTypes.SET_THEME,
    payload
})

export const toggleTheme = (): ToggleTheme => ({
    type: actionTypes.TOGGLE_THEME
})