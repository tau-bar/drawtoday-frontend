import { combineReducers } from "redux";
import canvasReducer from "./canvasReducer";
import themeReducer from "./themeReducer";
import wordReducer from "./wordReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    words: wordReducer,
    canvas: canvasReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;