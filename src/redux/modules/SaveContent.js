const initialState = {
    title: '',
    context: '',
    date: '',
}

const SaveContent = (state = initialState, action) => {
    switch (action.type) {
        case 'title':
            return {
                ...state,
                title: action.payLoad
            };
        case 'context':
            return {
                ...state,
                context: action.payLoad,
            };
        case 'date':
            return {
                ...state,
                date: action.payLoad
            };
        case 'clear':
            return action.payLoad;
        default:
            return state;
    }
}

export default SaveContent;