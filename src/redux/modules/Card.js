const initialState = [];

const Card = (state = initialState, action) => {

    const createDate = new Date();

    switch (action.type) {
        case 'save':
            console.log(createDate);
            console.log(new Date(action.payLoad.date));
            const diff = new Date(action.payLoad.date) - createDate;
            const diffDay = Math.floor(diff / (1000*60*60*24));
            const diffHour = Math.floor((diff / (1000*60*60)) % 24);
            const diffMin = Math.floor((diff / (1000*60)) % 60);
            const diffSec = Math.floor(diff / 1000 % 60);
            return [...state, {
                id : createDate,
                title : action.payLoad.title,
                context : action.payLoad.context,
                date : `${diffDay}일 ${diffHour}시 ${diffMin}분 ${diffSec}초`,
                isDone : false,
            }];
        default:
            return state;
    }
}

export default Card;