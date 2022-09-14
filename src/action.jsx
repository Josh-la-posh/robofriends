import { CHANGE_SEARCH_FIELD } from "./constants";
import { CHANGE_NAME_FIELD } from "./constants";
import { CHANGE_EMAIL_FIELD } from "./constants";

export const setQuery = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const setName = (text) => {
    return {
        type : CHANGE_NAME_FIELD,
        payload: text
    }
}

export const setEmail = (text) => {
    return {
        type : CHANGE_EMAIL_FIELD,
        payload: text
    }
}