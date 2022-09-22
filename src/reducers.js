import { CHANGE_SEARCH_FIELD, CHANGE_EMAIL_FIELD, CHANGE_NAME_FIELD, INCREMENT, DECREMENT, RESET } from "./constants";

const initialState = {
    query: '',
    name: '',
    email: '',
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {
                ...state,
                query: action.payload
            };
        case CHANGE_NAME_FIELD:
            return {
                ...state,
                name: action.payload
            };
        case CHANGE_EMAIL_FIELD:
            return {
                ...state,
                email: action.payload
            };
        default:
            return state;
    }
}