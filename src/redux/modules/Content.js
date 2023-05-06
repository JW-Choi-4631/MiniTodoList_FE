import { CLEAR, CONTEXT, DATE, TITLE } from "./ActionCreator";

const initialState = {
    title: '',
    context: '',
    date: '',
}

const SaveContent = (state = initialState, action) => {
    switch (action.type) {
        case TITLE:
            return {
                ...state,
                title: action.payLoad
            };
        case CONTEXT:
            return {
                ...state,
                context: action.payLoad,
            };
        case DATE:
            return {
                ...state,
                date: action.payLoad
            };
        case CLEAR:
            return initialState;
        default:
            return state;
    }
}

export default SaveContent;