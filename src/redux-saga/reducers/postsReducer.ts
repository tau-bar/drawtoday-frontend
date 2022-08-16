import { Action, actionTypes } from "../interfaces/actions.interfaces";
import { PostState } from "../interfaces/states.interfaces";

const intitialState: PostState = {
    posts: [],
};

const reducer = (state = intitialState, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS_SUCCESS:
            action.payload.posts.forEach(post => {
                if (state.posts.filter(p => p.drawingId === post.drawingId).length === 0) {
                    state.posts.push(post);
                }
            })
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default reducer;