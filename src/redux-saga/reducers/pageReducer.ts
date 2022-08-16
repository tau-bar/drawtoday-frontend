import { Action, actionTypes } from "../interfaces/actions.interfaces";
import { PageState } from "../interfaces/states.interfaces";

const intitialState: PageState = {
    pageNumber: 0,
};

const reducer = (state = intitialState, action: Action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PAGE:
            return {
                ...state,
                pageNumber: action.payload.newPageNumber
            }
        default:
            return state
    }
}

export default reducer;