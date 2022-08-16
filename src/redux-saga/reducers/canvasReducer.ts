import { Action, actionTypes } from "../interfaces/actions.interfaces";
import { CanvasState } from "../interfaces/states.interfaces";

const intitialState: CanvasState = {
    savedDraft: '{"lines":[],"width":400,"height":400}',
    dateSaved: new Date()
};

const reducer = (state = intitialState, action: Action) => {
    switch (action.type) {
        case actionTypes.SAVE_DRAFT_IN_STORAGE:
            console.log(action.payload.drawing)
            return {
                ...state,
                savedDraft: action.payload.drawing,
                dateSaved: action.payload.date,
            }
        case actionTypes.LOGOUT:
            return intitialState
        case actionTypes.GET_DRAWING_SUCCESS:
            return {
                ...state,
                savedDraft: action.payload.drawing
            }
        case actionTypes.GET_DRAWING_FAILED:
            return state
        default:
            return state
    }
}

export default reducer