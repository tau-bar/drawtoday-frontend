import { Action, actionTypes } from "../interfaces/actions.interfaces";
import { PostState } from "../interfaces/states.interfaces";

const intitialState: PostState = {
    posts: [],
};

const reducer = (state = intitialState, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload.posts
            }
        default:
            return state;
    }
};

export default reducer;