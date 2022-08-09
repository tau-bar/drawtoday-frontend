import { THEME } from "../../config/constants";
import { ThemeState } from "../interfaces/states.interfaces";
import { Action, actionTypes } from "../interfaces/actions.interfaces";

const intitialState: ThemeState = {
    mode: THEME.LIGHT
};

const getToggledTheme = (mode: THEME) => {
    if (mode === THEME.DARK) {
        return THEME.LIGHT;
    } else {
        return THEME.DARK;
    }
}

export default (state = intitialState, action: Action) => {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                mode: action.payload.mode
            }
        case actionTypes.TOGGLE_THEME:
            return {
                ...state,
                mode: getToggledTheme(state.mode)
            }
        default:
            return state
    }
}