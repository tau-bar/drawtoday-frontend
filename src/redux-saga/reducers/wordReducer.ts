import { Action, actionTypes } from "../interfaces/actions.interfaces";
import { WordState } from "../interfaces/states.interfaces";

const intitialState: WordState = {
    wordOfTheDay: "",
    id: 0,
    postedToday: false,
};

const reducer = (state = intitialState, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_WORD_OF_DAY_SUCCESS:
            return {
                ...state,
                wordOfTheDay: action.payload.word.word,
                id: action.payload.word.id,
                postedToday: action.payload.postedToday,
            };
        case actionTypes.POST_DRAWING_SUCCESS:
            return {
                ...state,
                postedToday: true,
            };
        default:
            return state;
    }
};

export default reducer;