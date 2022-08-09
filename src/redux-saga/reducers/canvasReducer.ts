import { Action, actionTypes } from "../interfaces/actions.interfaces";
import { CanvasState } from "../interfaces/states.interfaces";

const intitialState: CanvasState = {
    savedDraft: '{"lines":[],"width":400,"height":400}',
    dateSaved: new Date()
};

export default (state = intitialState, action: Action) => {
    switch (action.type) {
        case actionTypes.SAVE_DRAFT_IN_STORAGE:
            return {
                ...state,
                savedDraft: action.payload.drawing,
                dateSaved: action.payload.date,
            }
        default:
            return state
    }
}