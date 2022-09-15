import { CHANGE_SEARCH_FIELD, CHANGE_EMAIL_FIELD, CHANGE_NAME_FIELD, INCREMENT, DECREMENT, RESET } from "./constants";

const initialState = {
    query: '',
    name: '',
    email: '',
    count: 0
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
        case INCREMENT:
            return {
                // value: (state.value = state.value + 1)
                ...state,
                count: state.count + 1
            };
            case DECREMENT:

              if(state.count === 0 ){
                  return {
                      ...state,
                      count: 0
                  }
              }else{
                return {
                    // value: (state.value = state.value - 1)
                ...state,
                count: state.count - 1
                };
              }

             
            case RESET:
                return {
                    ...state,
                    count: 0
                }
        default:
            return state;
    }
}