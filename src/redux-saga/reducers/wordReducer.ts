import { Action, actionTypes } from "../interfaces/actions.interfaces";
import { WordState } from "../interfaces/states.interfaces";

const intitialState: WordState = {
    wordOfTheDay: "nothing"
};

export default (state = intitialState, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_WORD_OF_DAY:
            return {
                ...state,
            }
        case actionTypes.GET_WORD_OF_DAY_SUCCESS:
            return {
                ...state,
                wordOfTheDay: action.payload
            }
        case actionTypes.GET_WORD_OF_DAY_FAILED:
            return {
                ...state
            }
        default:
            return state
    }
}