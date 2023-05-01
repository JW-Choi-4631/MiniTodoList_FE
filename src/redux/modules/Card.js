const initialState = [];

const Card = (state = initialState, action) => {
    switch (action.type) {
        case 'save':
            return [...state, {
                id : new Date(),
                title : action.payLoad.title,
                context : action.payLoad.context,
                isDone : false,
            }];
        default:
            return state;
    }
}

export default Card;