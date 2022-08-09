import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;