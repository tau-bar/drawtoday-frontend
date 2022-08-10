import { Action, actionTypes } from "../interfaces/actions.interfaces";
import { UserState } from "../interfaces/states.interfaces";

const intitialState: UserState = {
    userId: 0,
    token: "",
    isLoginLoading: false,
    loginError: "",
};

const reducer = (state = intitialState, action: Action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isLoginLoading: false,
                loginError: ""
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginLoading: true,
                userId: action.payload.userId,
                token: action.payload.token,
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                isLoginLoading: false,
                loginError: action.error.message,
            }
        case actionTypes.SIGN_UP:
            return {
                ...state,
                isLoginLoading: false,
                loginError: "",
            }
        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoginLoading: false,
                userId: action.payload.userId,
                token: action.payload.token,
            }
        case actionTypes.SIGN_UP_FAILED:
            return {
                ...state,
                isLoginLoading: false,
                loginError: action.error.message,
            }
        default:
            return state;
    }
};

export default reducer;