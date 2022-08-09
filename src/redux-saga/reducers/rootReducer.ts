import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import wordReducer from "./wordReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    words: wordReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;